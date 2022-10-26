const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:{type:string,required:true},
    passwordHash:{type:string,required:true}
});

const  User = mongoose.model("user",userSchema);


module.export = User;