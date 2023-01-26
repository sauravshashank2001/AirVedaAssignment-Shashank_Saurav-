Assignment Links

Backend link(DEPLOYED ON RENDER) - https://airveda.onrender.com
Frontend link(DEPLOYED ON NETLIFY) - https://airveda-devices-shashank.netlify.app/


• API to create a device
        o Endpoint: POST /api/devices/
        o Content-Type: application/json
        o Request Body
                ▪ uid
                ▪ name
                
• API to delete a device
       o Endpoint: DELETE /api/devices/{device-uid}
       ▪ device-uid - uid of the device you want to delete

• API to retrieve a device
        o Endpoint: GET /api/devices/{device-uid}
        ▪ device-uid - uid of the device you want to retrieve

• API to list all devices
        o Endpoint: GET /api/devices/
        o Response format should be JSON
 
• API to return readings for the given device in a given period.
        oEndpoint: GET /api/devices/{device
        uid}/readings/{parameter}/?start_on=yyyy-mm
        ddTHH:MM:SS&end_on=yyyy-mm-ddTHH:MM:SS
        ▪ device-uid - uid of the device
        ▪ parameter - temperature or humidity
        ▪ start_on and end_on are query parameters which are compulsory
        and should be used to filter the result to only include data between
        start_on and end_on.
        ▪ yyyy-mm-ddTHH:MM:SS - year-month
        -dateThour:minute:second



Note :- IN CASE OF ANY ERROR IN PATHS PLEASE FOLLOW ROUTE FOLDER IN BACKEND FOLDER FOR FURTHER CLARIFICATION.

