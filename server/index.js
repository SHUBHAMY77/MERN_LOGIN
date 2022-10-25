const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config();



//setup a server
const app = express()
const PORT = process.env.PORT ||  5000;
app.listen(PORT,()=>{console.log(`website is running on port:- ${PORT}`)})



//setup a dataBase

mongoose.connect(process.env.MDB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err) return  console.log(err);
    console.log("connected to dataBase")
})


//VPOInpYksqT0aUQA

//mongodb+srv://shubham96:<password>@cluster0.aareobm.mongodb.net/?retryWrites=true&w=majority