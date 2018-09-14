# Conectric Node.js RS-485 EKM Meter Demo

Quick start for getting up and running with Node.js, the Conectric RS-85 sensor / serial hub, and EKM meters.  

## Version 3 EKM Meter

```
$ cd omnimeter-v3
$ npm install
```

* Edit `server.js`, replacing all instances of `1d2d` with the short MAC address of your RS-485 sensor / serial hub.
* Also replace `303030303030303236313435` with your meter's serial number, encoded such that 0 = 30, 1 = 31, 2 = 32 etc.
* (Assuming that the meter is powered on and connected to the Conectric serial hub):

```
npm start
```

You should see output similar to:

```
> node server.js

Found USB router device at /dev/tty.usbserial-DB00VL5G.
Gateway opened.
Switched gateway to dump payload mode.
USB router mac address is 00124b000513da7f.
USB router Contiki version: 3.x-d48f2f4
USB router Conectric version: 1.1.2
Switched gateway to sink mode.
Gateway is ready.
Need to request 4 chunks of size 64 from e17b
Done, complete response:
{"model":"4130","firmware":23,"meter_address":"000010007076","kwh_tot":0,"kwh_tariff_1":0,"kwh_tariff_2":0,"kwh_tariff_3":0,"kwh_tariff_4":0,"rev_kwh_tot":0,"rev_kwh_tariff_1":0,"rev_kwh_tariff_2":0,"rev_kwh_tariff_3":0,"rev_kwh_tariff_4":0,"rms_volts_ln_1":119.4,"rms_volts_ln_2":0,"rms_volts_ln_3":0,"amps_ln_1":0,"amps_ln_2":0,"amps_ln_3":0,"rms_watts_ln_1":0,"rms_watts_ln_2":0,"rms_watts_ln_3":0,"rms_watts_tot":0,"cos_theta_ln_1":" 1.00","cos_theta_ln_2":"C0.00","cos_theta_ln_3":"C0.00","max_demand":85,"max_demand_period":1,"meter_time":"18091406124051","ct_ratio":"0200","pulse_cnt_1":0,"pulse_cnt_2":0,"pulse_cnt_3":0,"pulse_ratio_1":0,"pulse_ratio_2":0,"pulse_ratio_3":0,"state_inputs":0}
```

## Version 4 EKM Meter

```
$ cd omnimeter-v4
$ npm install
```

* Edit `server.js`, replacing all instances of `dfbc` with the short MAC address of your RS-485 sensor / serial hub.
* Also replace `303030333030303032323535` with your meter's serial number, encoded such that 0 = 30, 1 = 31, 2 = 32 etc.
* (Assuming that the meter is powered on and connected to the Conectric serial hub):

```
npm start
```
You should see output similar to:

```
> node server.js

Found USB router device at /dev/tty.usbserial-DB00VL37.
Gateway opened.
Switched gateway to dump payload mode.
USB router mac address is 00124b000513da40.
USB router Contiki version: 3.x-d48f2f4
USB router Conectric version: 1.1.2
Switched gateway to sink mode.
Gateway is ready.
Need to request 4 chunks of size 64 from dfbc
Got all A data
Need to request 4 chunks of size 64 from dfbc
Got all B data
Done, complete response:
{"model":"4132","firmware":25,"meter_address":"000300002255","kwh_tot":0,"reactive_energy_tot":0,"rev_kwh_tot":0,"kwh_tariff_1":0,"kwh_tariff_2":0,"kwh_tariff_3":0,"rev_kwh_ln_1":0,"rev_kwh_ln_2":0,"rev_kwh_ln_3":0,"resettable_kwh_tot":0,"resettable_rev_kwh_tot":0,"rms_volts_ln_1":118.7,"rms_volts_ln_2":0,"rms_volts_ln_3":0,"amps_ln_1":0,"amps_ln_2":0,"amps_ln_3":0,"rms_watts_ln_1":0,"rms_watts_ln_2":0,"rms_watts_ln_3":0,"rms_watts_tot":0,"power_factor_ln_1":" 1.00","power_factor_ln_2":"C0.00","power_factor_ln_3":"C0.00","reactive_pwr_ln_1":0,"reactive_pwr_ln_2":0,"reactive_pwr_ln_3":0,"reactive_pwr_tot":0,"line_freq":60.06,"pulse_cnt_1":0,"pulse_cnt_2":0,"pulse_cnt_3":0,"state_inputs":0,"state_watts_dir":1,"state_out":1,"kwh_scale":2,"meter_time":"18091406094813","rev_kwh_tariff_1":0,"rev_kwh_tariff_2":0,"rev_kwh_tariff_3":0,"rev_kwh_tariff_4":0,"cos_theta_ln_1":" 1.00","cos_theta_ln_2":"C0.00","cos_theta_ln_3":"C0.00","rms_watts_max_demand":0,"max_demand_period":1,"pulse_ratio_1":1,"pulse_ratio_2":1,"pulse_ratio_3":1,"ct_ratio":200,"auto_reset_max_demand":0,"pulse_output_ratio":800}
```
