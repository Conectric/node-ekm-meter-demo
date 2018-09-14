const ekmdecoder = {
  subMeterV3Mapping: [
    { fieldName: 'model',             startPos:   2, endPos: 5,   isHexNumber: true                                   },
    { fieldName: 'firmware',          startPos:   6, endPos: 7,   isHexNumber: true,                  isNumeric: true },
    { fieldName: 'meter_address',     startPos:   8, endPos: 31,  decode: true                                        },
    { fieldName: 'kwh_tot',           startPos:  32, endPos: 47,  decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'kwh_tariff_1',      startPos:  48, endPos: 63,  decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'kwh_tariff_2',      startPos:  64, endPos: 79,  decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'kwh_tariff_3',      startPos:  80, endPos: 95,  decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'kwh_tariff_4',      startPos:  96, endPos: 111, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rev_kwh_tot',       startPos: 112, endPos: 127, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rev_kwh_tariff_1',  startPos: 128, endPos: 143, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rev_kwh_tariff_2',  startPos: 144, endPos: 159, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rev_kwh_tariff_3',  startPos: 160, endPos: 175, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rev_kwh_tariff_4',  startPos: 176, endPos: 191, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rms_volts_ln_1',    startPos: 192, endPos: 199, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rms_volts_ln_2',    startPos: 200, endPos: 207, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rms_volts_ln_3',    startPos: 208, endPos: 215, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'amps_ln_1',         startPos: 216, endPos: 225, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'amps_ln_2',         startPos: 226, endPos: 235, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'amps_ln_3',         startPos: 236, endPos: 245, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rms_watts_ln_1',    startPos: 246, endPos: 259, decode: true,                       isNumeric: true },
    { fieldName: 'rms_watts_ln_2',    startPos: 260, endPos: 273, decode: true,                       isNumeric: true },
    { fieldName: 'rms_watts_ln_3',    startPos: 274, endPos: 287, decode: true,                       isNumeric: true },
    { fieldName: 'rms_watts_tot',     startPos: 288, endPos: 301, decode: true,                       isNumeric: true },
    { fieldName: 'cos_theta_ln_1',    startPos: 302, endPos: 309, decode: true,     decimalPlaces: 2                  },
    { fieldName: 'cos_theta_ln_2',    startPos: 310, endPos: 317, decode: true,     decimalPlaces: 2                  },
    { fieldName: 'cos_theta_ln_3',    startPos: 318, endPos: 325, decode: true,     decimalPlaces: 2                  },
    { fieldName: 'max_demand',        startPos: 326, endPos: 341, decode: true,     decimalPlaces: 1, isNumeric: true },
    { fieldName: 'max_demand_period', startPos: 342, endPos: 343, decode: true,                       isNumeric: true },
    { fieldName: 'meter_time',        startPos: 344, endPos: 371, decode: true,                                       },
    { fieldName: 'ct_ratio',          startPos: 372, endPos: 379, decode: true                                        },
    { fieldName: 'pulse_cnt_1',       startPos: 380, endPos: 395, decode: true,                       isNumeric: true },
    { fieldName: 'pulse_cnt_2',       startPos: 396, endPos: 411, decode: true,                       isNumeric: true },
    { fieldName: 'pulse_cnt_3',       startPos: 412, endPos: 427, decode: true,                       isNumeric: true },
    { fieldName: 'pulse_ratio_1',     startPos: 428, endPos: 435, decode: true,                       isNumeric: true },
    { fieldName: 'pulse_ratio_2',     startPos: 436, endPos: 443, decode: true,                       isNumeric: true },
    { fieldName: 'pulse_ratio_3',     startPos: 444, endPos: 451, decode: true,                       isNumeric: true },            
    { fieldName: 'state_inputs',      startPos: 452, endPos: 457, decode: true,                       isNumeric: true }
    // { fieldName: 'reserved',          startPos: 458, endPos: 497, decode: false                                       },
    // { fieldName: 'unknown',           startPos: 498, endPos: 505, decode: false                                       },            
    // { fieldName: 'crc',               startPos: 506, endPos: 509, isHexNumber: true                                   }
  ],

  subMeterV4aMapping: [
    { fieldName: 'model',                  startPos:   2, endPos:  5,  isHexNumber: true                               },
    { fieldName: 'firmware',               startPos:   6, endPos:  7,  isHexNumber: true,              isNumeric: true },
    { fieldName: 'meter_address',          startPos:   8, endPos:  31, decode: true                                    },
    { fieldName: 'kwh_tot',                startPos:  32, endPos:  47, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'reactive_energy_tot',    startPos:  48, endPos:  63, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rev_kwh_tot',            startPos:  64, endPos:  79, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'kwh_tariff_1',           startPos:  80, endPos:  95, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'kwh_tariff_2',           startPos:  96, endPos: 111, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'kwh_tariff_3',           startPos: 112, endPos: 127, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rev_kwh_ln_1',           startPos: 128, endPos: 143, decode: true, decimalPlaces: 1, isNumeric: true }, 
    { fieldName: 'rev_kwh_ln_2',           startPos: 144, endPos: 159, decode: true, decimalPlaces: 1, isNumeric: true }, 
    { fieldName: 'rev_kwh_ln_3',           startPos: 160, endPos: 175, decode: true, decimalPlaces: 1, isNumeric: true }, 
    { fieldName: 'resettable_kwh_tot',     startPos: 176, endPos: 191, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'resettable_rev_kwh_tot', startPos: 192, endPos: 207, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rms_volts_ln_1',         startPos: 208, endPos: 215, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rms_volts_ln_2',         startPos: 216, endPos: 223, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rms_volts_ln_3',         startPos: 224, endPos: 231, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'amps_ln_1',              startPos: 232, endPos: 241, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'amps_ln_2',              startPos: 242, endPos: 251, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'amps_ln_3',              startPos: 252, endPos: 261, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rms_watts_ln_1',         startPos: 262, endPos: 275, decode: true,                   isNumeric: true },
    { fieldName: 'rms_watts_ln_2',         startPos: 276, endPos: 289, decode: true,                   isNumeric: true },
    { fieldName: 'rms_watts_ln_3',         startPos: 290, endPos: 303, decode: true,                   isNumeric: true },
    { fieldName: 'rms_watts_tot',          startPos: 304, endPos: 317, decode: true,                   isNumeric: true },
    { fieldName: 'power_factor_ln_1',      startPos: 318, endPos: 325, decode: true, decimalPlaces: 2                  },
    { fieldName: 'power_factor_ln_2',      startPos: 326, endPos: 333, decode: true, decimalPlaces: 2                  },
    { fieldName: 'power_factor_ln_3',      startPos: 334, endPos: 341, decode: true, decimalPlaces: 2                  },
    { fieldName: 'reactive_pwr_ln_1',      startPos: 342, endPos: 355, decode: true,                   isNumeric: true },
    { fieldName: 'reactive_pwr_ln_2',      startPos: 356, endPos: 369, decode: true,                   isNumeric: true },
    { fieldName: 'reactive_pwr_ln_3',      startPos: 370, endPos: 383, decode: true,                   isNumeric: true },  
    { fieldName: 'reactive_pwr_tot',       startPos: 384, endPos: 397, decode: true,                   isNumeric: true },
    { fieldName: 'line_freq',              startPos: 398, endPos: 405, decode: true, decimalPlaces: 2, isNumeric: true },
    { fieldName: 'pulse_cnt_1',            startPos: 406, endPos: 421, decode: true,                   isNumeric: true },
    { fieldName: 'pulse_cnt_2',            startPos: 422, endPos: 437, decode: true,                   isNumeric: true },
    { fieldName: 'pulse_cnt_3',            startPos: 438, endPos: 453, decode: true,                   isNumeric: true },
    { fieldName: 'state_inputs',           startPos: 454, endPos: 455, decode: true,                   isNumeric: true },
    { fieldName: 'state_watts_dir',        startPos: 456, endPos: 457, decode: true,                   isNumeric: true },
    { fieldName: 'state_out',              startPos: 458, endPos: 459, decode: true,                   isNumeric: true },
    { fieldName: 'kwh_scale',              startPos: 460, endPos: 461, decode: true,                   isNumeric: true },
  //  { fieldName: 'reserved_a',             startPos: 462, endPos: 465, decode: false                                   },
    { fieldName: 'meter_time',             startPos: 466, endPos: 493, decode: true,                                   }
  //  { fieldName: 'reserved_b',             startPos: 494, endPos: 505, decode: false                                   },
  //  { fieldName: 'crc',                    startPos: 506, endPos: 509, isHexNumber: true                               }
  ],

  subMeterV4bMapping: [
  //  { fieldName: 'model',                 startPos:   2, endPos:   5, isHexNumber: true },
  //  { fieldName: 'firmware',              startPos:   6, endPos:   7, isHexNumber: true },
  //  { fieldName: 'meter_address',         startPos:   8, endPos:  31, decode: true },
  //  { fieldName: 'kwh_tariff_1',          startPos:  32, endPos:  47, decode: true, decimalPlaces: 1, isNumeric: true },
  //  { fieldName: 'kwh_tariff_2',          startPos:  48, endPos:  63, decode: true, decimalPlaces: 1, isNumeric: true },
  //  { fieldName: 'kwh_tariff_3',          startPos:  64, endPos:  79, decode: true, decimalPlaces: 1, isNumeric: true },
  //  { fieldName: 'kwh_tariff_4',          startPos:  80, endPos:  95, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rev_kwh_tariff_1',      startPos:  96, endPos: 111, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rev_kwh_tariff_2',      startPos: 112, endPos: 127, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rev_kwh_tariff_3',      startPos: 128, endPos: 143, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'rev_kwh_tariff_4',      startPos: 144, endPos: 159, decode: true, decimalPlaces: 1, isNumeric: true },
  //  { fieldName: 'rms_volts_ln_1',        startPos: 160, endPos: 167, decode: true, decimalPlaces: 1, isNumeric: true },
  //  { fieldName: 'rms_volts_ln_2',        startPos: 168, endPos: 175, decode: true, decimalPlaces: 1, isNumeric: true },
  //  { fieldName: 'rms_volts_ln_3',        startPos: 176, endPos: 183, decode: true, decimalPlaces: 1, isNumeric: true },
  //  { fieldName: 'amps_ln_1',             startPos: 184, endPos: 193, decode: true, decimalPlaces: 1, isNumeric: true },
  //  { fieldName: 'amps_ln_2',             startPos: 194, endPos: 203, decode: true, decimalPlaces: 1, isNumeric: true },
  //  { fieldName: 'amps_ln_3',             startPos: 204, endPos: 213, decode: true, decimalPlaces: 1, isNumeric: true },
  //  { fieldName: 'rms_watts_ln_1',        startPos: 214, endPos: 227, decode: true,                   isNumeric: true },
  //  { fieldName: 'rms_watts_ln_2',        startPos: 228, endPos: 241, decode: true,                   isNumeric: true },
  //  { fieldName: 'rms_watts_ln_3',        startPos: 242, endPos: 255, decode: true,                   isNumeric: true },
  //  { fieldName: 'rms_watts_tot',         startPos: 256, endPos: 269, decode: true,                   isNumeric: true },
    { fieldName: 'cos_theta_ln_1',        startPos: 270, endPos: 277, decode: true, decimalPlaces: 2                  },
    { fieldName: 'cos_theta_ln_2',        startPos: 278, endPos: 285, decode: true, decimalPlaces: 2                  },
    { fieldName: 'cos_theta_ln_3',        startPos: 286, endPos: 293, decode: true, decimalPlaces: 2                  },
    { fieldName: 'rms_watts_max_demand',  startPos: 294, endPos: 309, decode: true, decimalPlaces: 1, isNumeric: true },
    { fieldName: 'max_demand_period',     startPos: 310, endPos: 311, decode: true,                   isNumeric: true },
    { fieldName: 'pulse_ratio_1',         startPos: 312, endPos: 319, decode: true,                   isNumeric: true },
    { fieldName: 'pulse_ratio_2',         startPos: 320, endPos: 327, decode: true,                   isNumeric: true },
    { fieldName: 'pulse_ratio_3',         startPos: 328, endPos: 335, decode: true,                   isNumeric: true },
    { fieldName: 'ct_ratio',              startPos: 336, endPos: 343, decode: true,                   isNumeric: true },
    { fieldName: 'auto_reset_max_demand', startPos: 344, endPos: 345, decode: true,                   isNumeric: true },
    { fieldName: 'pulse_output_ratio',    startPos: 346, endPos: 353, decode: true,                   isNumeric: true },
  //  { fieldName: 'reserved',              startPos: 354, endPos: 465, decode: false },
  //  { fieldName: 'meter_time',            startPos: 466, endPos: 493, decode: true,                                    },
  //  { fieldName: 'type',                  startPos: 494, endPos: 497, decode: false },
  //  { fieldName: 'end',                   startPos: 498, endPos: 505, decode: false }
  ],

  decodeV3Message: (msgPayload) => {
    return ekmdecoder.hex2Obj(msgPayload, ekmdecoder.subMeterV3Mapping)
  },

  decodeV4Message: (msgAPayload, msgBPayload) => {
    let obj = ekmdecoder.hex2Obj(msgAPayload, ekmdecoder.subMeterV4aMapping)
    Object.assign(obj, ekmdecoder.hex2Obj(msgBPayload, ekmdecoder.subMeterV4bMapping))

    return obj
  },

  hex2Obj: (h, mapping) => {
    const hex = h.toString()
  
    let res = {}
    let i
  
    for (let currField of mapping) {
      let str = ''
  
      for (i = currField.startPos; i <= currField.endPos; i+=2) {
        if (currField.isHexNumber || ! currField.decode) {
          // Leave this as hex
          str += hex.substr(i, 2)
        } else {
          // Decode this to ASCII
          str += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
        }
      }
  
      if (currField.isHexNumber) {
        // Look at the whole field as a single hex number
        str = `${parseInt(str, 16)}`
      }
  
      if (currField.decimalPlaces && currField.decimalPlaces > 0) {
        // Insert decimal point at appropriate place
        let dotPos = str.length - currField.decimalPlaces
        str = `${str.substring(0, dotPos)}.${str.substring(dotPos)}`
      } 
  
      // Convert to a number if needed
      if (currField.isNumeric) {
        let val
  
        if (currField.decimalPlaces && currField.decimalPlaces > 0) {
          // Parse string to float?
          val = parseFloat(str)
        } else {
          val = parseInt(str)
        }
  
        res[currField.fieldName] = val
      } else {
        res[currField.fieldName] = str
      }
    }
  
    return res
  }
}



module.exports = ekmdecoder