const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({

        uid : {
            type: String,
            required: [true,"please enter the uid of the device"]
        },
        name : {
            type: String,
            required: [true,"please enter the name of device"]
        },
        createdAt : {
            type: Date,
            default: Date.now
        }
});

module.exports = mongoose.model("Device",deviceSchema);