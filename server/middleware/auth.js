const jwt =  require("jsonwebtoken");


function auth(req,res,next){
    try {
        const token = req.cookies.token;
        if(!token){
           return res.status(401).json({errorMessage:"Unauthorzied"})
        }
        const verified = jwt .verify(token,process.env.JWT_TOKEN)
        req.user = verified.user;

        next();
    } catch (error) {
        console.error(error)
        res.status(401).json({errorMessage:"Unauthorzied"})
    }
}

module.exports = auth;