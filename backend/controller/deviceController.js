const Device = require("../model/deviceModel");
const { readingsTemprature,readingsHumidity } = require("../reading");

/*Create device*/

exports.createDevice = async(req,res)=>{
    try{
        const {uid,name} = req.body;
        const device = await Device.findOne({uid: uid});
        if(device){
            res.status(400).json({
                success: false,
                message: "device already exist" 
            })
            return;
        }
        const newDevice = await Device.create({uid,name});
        res.status(200).json({
        success: true,
        message: "device created successfully",
        newDevice
    })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
    
};

/*Delete the device*/

exports.deleteDevice = async(req,res) => {
    try{ 
        const device = await Device.findOne(req.params);
        if(!device){
            res.status(400).json({
                success: false,
                message: "please enter a valid device Id"
            })
            return;
        }
    await device.remove();
    res.status(200).json({
        success: true,
        message: "device Deleted Successfully",
      });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
    
}

/*getAll device */

exports.getAllDevice = async(req,res) => {
    const getAllDevice = await Device.find({});
    if(!getAllDevice){
        res.status(400).json({
            success: false,
            message: "No device to show please create some to view"
        })
        return;
    }
    res.status(200).json({
        success: true,
        message: "Device fetched successfully",
        getAllDevice
    })
};

/*getSingle device */


exports.getSingleDevice = async(req,res) => {
    const getSingleDevice = await Device.findOne(req.params);
    if(!getSingleDevice){
        res.status(400).json({
            success: false,
            message: "please enter a valid device Id"
        })
        return;
    }
    res.status(200).json({
        success: true,
        message: "Device fetched successfully",
        getSingleDevice
    })
};

/*Get Reading*/


exports.getReadings = async (req, res) => {
    const { uid, parameter } = req.params;
    const { start_on, end_on } = req.query;
    let device;
    // Find the device with the specified UID
    if(parameter==="humidity"){
         device = readingsHumidity.find(d => d.uid === uid);

    }
    else{
       device = readingsTemprature.find(d => d.uid === uid);

    }
  
    if (!device) {
      return res.status(404).json({ error: "Device not found" });
    }
  
    // Convert start and end timestamps to Date objects
    const startDate = new Date(start_on);
    const endDate = new Date(end_on);
  
    // Filter the readings by the specified time range and parameter
    const filteredReadings = device.readings.filter(reading => {
      const readingDate = new Date(reading.timestamp);
      return reading[parameter] && readingDate >= startDate && readingDate <= endDate;
    });
  
    res.json(filteredReadings);
  };


  /*get all reading */

  exports.getAllReading = async (req, res) => {
    const { uid } = req.query;
  
    // Find the device with the specified UID
        const devicehumidity = readingsHumidity.find(d => d.uid === uid);

   
        const devicetemp = readingsTemprature.find(d => d.uid === uid);
        if(!devicetemp || !devicehumidity){
            res.status(400).json({
                success: false,
                message: "no data available for the requested device"
            })
            return;
        }
        const res1= devicetemp.readings
        const res2= devicehumidity.readings
        const data = {};
        data.temperature=res1;
        data.humidity = res2;

  
    res.status(200).json({
        success: true,
        data
    });
  };

  /*get List of uid */


exports.getAlluid = async(req,res) => {
    const allList = [];
    const allDevice = await Device.find({});
    allDevice.map((device)=>(allList.push(device.uid)));
    res.status(200).json({
        success: true,
        allList
    })
}