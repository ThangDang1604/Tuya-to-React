###This use to create 2 APIs: get current temperature and set temperature

#get tuya cloud connection
import Cloud as c

id = "Device ID"
stat = c.cloud().getstatus(id)
print(stat)

#print current temparature function
def getTemp():
    for d in stat['result']:
        if (d['code'] == "temp_current"):
            return d['value']
    #return 100

#Set temperasture function
def setTemp(a):
    commands = {
        "commands": [
            {"code": "temp_set", "value": a},
        ]
    }
    c.cloud().sendcommand(id,commands)

