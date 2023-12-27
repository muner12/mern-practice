const jwt=require('jsonwebtoken');
const authMiddleware=async(req,res,next) => {


    let token=req.header("Authorization");
    try {

    if(!token){
        res.status(401).json({message: "unauthorized Http Request"});
    }
    token=token.replace("Bearer","").trim();
    const isValide=await jwt.verify(token,process.env.JWT_SECRET_KEY);
    console.log(isValide);
    
} catch (error) {
    
}

next();
}


module.exports =authMiddleware