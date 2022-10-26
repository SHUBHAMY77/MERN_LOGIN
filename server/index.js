const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config();


//setup a server
const app = express()

app.use(express.json());
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


// setup a routes

app.use("/auth",require("./routers/userRouters"));

//VPOInpYksqT0aUQA

//mongodb+srv://shubham96:<password>@cluster0.aareobm.mongodb.net/?retryWrites=true&w=majority