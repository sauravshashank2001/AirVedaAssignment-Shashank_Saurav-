const { createDevice,deleteDevice, getAllDevice, getSingleDevice, getReadings, getAllReading, getAlluid } = require("../controller/deviceController");

const router = require("express").Router();

router.post("/devices",createDevice)
router.get("/devices/alluid",getAlluid);
router.delete("/devices/:uid",deleteDevice)
router.get("/devices/:uid",getSingleDevice)
router.get("/devices/:uid/readings/:parameter",getReadings);
router.get("/devices-graph/",getAllReading)

router.get("/devices",getAllDevice)



module.exports= router;