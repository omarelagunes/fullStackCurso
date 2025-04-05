const express = require("express");
const connectDB = require("./src/config/database.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002

connectDB();

app.use(express.json());

app.get("/", (req,res) =>{
    res.send("API is working");
});
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})
