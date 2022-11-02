const mongoose = require("mongoose")

const custimerSchema = new mongoose.Schema({
    name:{type:String,required:true},
});

const Customer = mongoose.model("customer",custimerSchema)

module.exports = Customer;