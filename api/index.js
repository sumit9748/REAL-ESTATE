const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
//const multer = require("multer");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const propertyRoute = require("./routes/property");

 const router = express.Router();


mongoose.connect('mongodb://localhost:27017/realestate',()=>{
    console.log("connection successfull")
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
 app.use("/api/property", propertyRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});