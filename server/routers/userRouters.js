const router = require("express").Router();
const User = require("../model/userModels")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/",async (req,res)=>{

    try{
        const  {email,password,passwordVerify}=req.body

        //validation
        if(!email || !password || !passwordVerify){
            return res
            .status(400)
            .json({errormessage:"please enter all the fields"})
        }
        if(password.length < 6){
            return res
            .status(400)
            .json({errormessage:"please enter password at least of 6 charaters"})
        }
        if(password !== passwordVerify){
            return res
            .status(400)
            .json({errormessage:"please enter the same password twice"})
        }

        const existingUser =  await User.findOne({email:email});
        if(existingUser){
            return res
            .status(400)
            .json({errormessage:"the email already exist in dataBase"})
        }

    const  salt = await bcrypt.genSalt();
    const passwordHash =  await bcrypt.hash(password,salt)

    // save  a new user  account  to the db

    const newUser = new User({
        email,passwordHash
    })

    const savedUser = await newUser.save();

    //logging in new user

    const token = jwt.sign({
        user:savedUser._id,
    },
    process.env.JWT_TOKEN
    
    )

   // using http-only token

   res.cookie("token",token,{
    httpOnly:true
   }).send();

    }catch(err){
        console.error(err)
        res.status(500).send();
    }
    
})


module.exports = router;