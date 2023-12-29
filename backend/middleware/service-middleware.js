const serviceMiddleware=(err,req,res,next) => {

res.status(500).json({message:"internal Server Error"});
next();
}

module.exports =serviceMiddleware