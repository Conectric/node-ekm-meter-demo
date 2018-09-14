/*
    EKM Omnimeter v4 demo.

    Reads data from meter serial number "000300002255" attached to Conectric RS-485 sensor "dfbc".

    One reading requires two messages to the meter... type A message, then type B.

    Meter response is received via data chunks.
*/

const gateway = require('conectric-usb-gateway');
const ekmdecoder = require('../common/ekmdecoder');

const METER_SERIAL_NUMBER_HEX = '303030333030303032323535';

let ekmData = {
    dataChunksA: [],
    dataChunksB: []
};

gateway.runGateway({
    onSensorMessage: (sensorMessage) => {
        if (sensorMessage.type === 'rs485ChunkEnvelopeResponse') {
            console.log(`Need to request ${sensorMessage.payload.numChunks} chunks of size ${sensorMessage.payload.chunkSize} from ${sensorMessage.sensorId}`);

            ekmData.chunkSize = sensorMessage.payload.chunkSize;
            ekmData.chunkToRequest = 0;
            ekmData.numChunks = sensorMessage.payload.numChunks;

            gateway.sendRS485ChunkRequest({
                chunkNumber: ekmData.chunkToRequest,
                chunkSize: ekmData.chunkSize,
                destination: sensorMessage.sensorId
            });
        } else if (sensorMessage.type === 'rs485ChunkResponse') {
            if (ekmData.chunkToRequest < (ekmData.numChunks - 1)) {
                if (ekmData.currentMessageType === 'A') {
                    ekmData.dataChunksA.push(sensorMessage.payload.data);
                } else {
                    ekmData.dataChunksB.push(sensorMessage.payload.data);
                }
                ekmData.chunkToRequest++;

                gateway.sendRS485ChunkRequest({
                    chunkNumber: ekmData.chunkToRequest,
                    chunkSize: ekmData.chunkSize,
                    destination: sensorMessage.sensorId
                });
            } else {
                // Drop the last byte from the final chunk.
                if (ekmData.currentMessageType === 'A') {
                    ekmData.dataChunksA.push(sensorMessage.payload.data.substring(0, sensorMessage.payload.data.length - 2));
                } else {
                    ekmData.dataChunksB.push(sensorMessage.payload.data.substring(0, sensorMessage.payload.data.length - 2));
                }

                console.log(`Got all ${ekmData.currentMessageType} data`);

                if (ekmData.currentMessageType === 'A') {
                    // Send EKM v4 meter message type B
                    ekmData.currentMessageType = 'B';
                    gateway.sendRS485Request({
                        message: `2F3F${METER_SERIAL_NUMBER_HEX}3031210D0A`,
                        destination: sensorMessage.sensorId,
                        hexEncodePayload: false
                    });
                } else {
                    console.log('Done, complete response:');
                    const msgAPayload = ekmData.dataChunksA.join('');
                    const msgBPayload = ekmData.dataChunksB.join('');

                    const obj = ekmdecoder.decodeV4Message(msgAPayload, msgBPayload);
                    console.log(JSON.stringify(obj));
                }
            }
        } else {
            console.log(sensorMessage);
        }
    },
    onGatewayReady: () => {
        console.log('Gateway is ready.');

        // One off... Configure RS485 for our meter device.
        // Only needs doing once, settings are retained in the RS485 sensor.
        // gateway.sendRS485ConfigMessage({
        //     baudRate: 9600,
        //     parity: gateway.PARITY_NONE,
        //     stopBits: 1,
        //     bitMask: 7,
        //     destination: 'dfbc'
        // });

        // Send EKM v4 meter message type A
        ekmData.currentMessageType = 'A';
        gateway.sendRS485Request({
            message: `2F3F${METER_SERIAL_NUMBER_HEX}3030210D0A`,
            destination: 'dfbc',
            hexEncodePayload: false
        });
    }
});