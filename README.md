# Thang Dang technical interview
## Task
Make a Django backend to read temperature for a tuya device with device_id: bfda0de9486ca26979ijfl
Which can be fully accessible through the following test project on tuya developer account: https://auth.tuya.com/?from=http%3A%2F%2Fplatform.tuya.com%2F

Navigate to cloud> open project> devices tab and you can see the above device with the name ( Thermostat new White valve).
When you successfully read temp you need to make two APIs. one for getting temp and another to set the temp on the device.

Then make a front-end app in react to allow users to sign up with their email address and see their device. 

## Files
React app template create from command
> npx create-react-app ThangDang-app

Main modified files are: 
- scr: App.js, thermostat.js
- backend: APIs.py, base.py, Cloud.py

## Requirement
- Flask, flask_cors
- Tinytuna, Node.js
- React, react-router-dom

## Method
Use Tuya.Cloud in python to connect to the device on Tuya website then fetch data and command.
Use flask python as backend.
Use React javascript as frontend.

## Error, bugs
From Monday (02/09), unable to fetch data or command due to expired subscription.
>   {'code': 28841002, 'msg': 'No permissions. Your subscription to cloud development plan has expired.', 'success': False, 't': 1725331805771, 'tid': '3977d7d6699f11efb77736033862a1ba'}

As only "azizisas@tcd".ie the account holder, email vertification only accept this email.
