###This use to connect to tuya cloud

import tinytuya
def cloud():
    cloud=tinytuya.Cloud(
        apiRegion="region", 
        apiKey="api KEY", 
        apiSecret="pai secret code", 
        apiDeviceID="device ID")
    return cloud