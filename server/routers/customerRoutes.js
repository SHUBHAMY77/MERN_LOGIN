const routes = require("express").Router();
const Customer =require("../model/customerModule")
const auth =  require("../middleware/auth");
const router = require("./userRouters");

routes.post('/',auth,async(req,res)=>{
    try{
     const {name}=req.body
     const newCustomer = new Customer({
        name,
     })

     const savedCoustmer = await newCustomer.save();
     res.json(savedCoustmer);
    }catch (err) {
      console.error(err);
      res.status(500).send();
    }
})

routes.get('/all',auth,async(req,res)=>{
    try {
        const customers =  await Customer.find()
        res.json(customers)
    } catch (err) {
        console.error(err);
        res.status(500).send();
      }
})
module.exports = routes