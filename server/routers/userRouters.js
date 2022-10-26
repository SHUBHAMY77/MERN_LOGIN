const router = require("express").Router();
const User = require("../model/userModels")

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


    }catch(err){
        console.error(err)
        res.status(500).send();
    }
    
})


module.exports = router;