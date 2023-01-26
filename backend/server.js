const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const DB_URI = "mongodb+srv://sauravshashank2001:yoyohoney@ecommerce.3t10vwc.mongodb.net/devices?retryWrites=true";

mongoose.set('strictQuery', true);
mongoose.connect(DB_URI)
        .then(()=>{
            console.log("database is connected")
        })
        .catch(()=>{
            console.log("error in connecting database")
        })

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const cors = require("cors")
const config = require("dotenv").config
config({
    path: "./config/config.env",
  });
const deviceRoutes = require("./routes/deviceRoutes");
/*Routes*/
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ["GET", "POST", "DELETE"],
    })
  );
app.use("/api",deviceRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Backend is running on 4000`)
});