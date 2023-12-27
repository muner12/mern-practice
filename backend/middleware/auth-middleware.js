const jwt=require('jsonwebtoken');
const User=require("../models/user-model");
const authMiddleware=async(req,res,next) => {


    let token=req.header("Authorization");
    try {

    if(!token){
        res.status(401).json({message: "unauthorized Http Request"});
    }
    token=token.replace("Bearer","").trim();
    const isVerified=jwt.verify(token,process.env.JWT_SECRET_KEY);
    if(!isVerified){
     res.status(401).json({message: "unauthorized Http Request"});
        
    }
   
    const userData= await User.findOne({email:isVerified.email}).select({password:0});
    req.user=userData;
    req.token=token;


    next();
} catch (error) {
    console.log(error);
}


}


module.exports =authMiddleware