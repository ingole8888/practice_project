const express=require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const connection= require("./config/config")

const detailsController = require('./routes/detailsRoutes')
const contactController = require('./routes/contactRoutes')

require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cors())

app.use("/details", detailsController)
app.use("/contact", contactController)

app.get("/",(req,res)=>{
    return res.status(200).send("HomePage");
})

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("db connected");
    }
    catch(err){
        console.log(err);
    }
    console.log(`db connect at ${process.env.PORT}`);
})