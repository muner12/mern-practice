const authMiddleware=async(req,res,next) => {


    const token=req.header("Authorization");
    if(!token){
        res.status(401).json({message: "unauthorized Http Request"});
    }
try {
    
} catch (error) {
    
}


}


module.exports =authMiddleware