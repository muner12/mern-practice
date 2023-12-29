
const User=require("../models/user-model");
const bcrypt=require("bcryptjs");
const auth = {
  async register(req, res, next) {
    const {username,email,phone,password}=req.body;
    try {
        
        if(!username && username==="" || !email || !phone || !password){
            return res.status(400).json({msg:"all fields are required!"})
        }
        //checking user->if exist return an error
        const isExistUser= await User.findOne({email});
        if(isExistUser){
            return res.status(409).json({msg:"Email already exists!"});
        }
        //hashed password

       
        const newUser=new User({
            username,
            email,
            phone,
            password
        });
      const result= await newUser.save();

     return res.status(201)
     .json({
          success:true,
         message: "User registed Succesfully",
         
         token: await result.generateToken()
         });

    } catch (error) {
        // console.log(error);
        // return res.status(500).json({ message: "internal Server error" });
        next(error);
        
    }
  },
  async login(req,res,next){
    const {email,password}=req.body;
    const userExist= await User.findOne({email});
    if(!userExist){
      return res.status(400).json({msg:"not exists"});
    }

    const isPasswordValid= await bcrypt.compare(password,userExist.password);
    if(isPasswordValid){
      return res.status(200).json({msg:"login",token:await userExist.generateToken()});
    }else{
        res.status(401).json({msg:"password is wrong"})
    }
    
  },

  async user(req,res,next){

    try {
      const userData=req.user;
      console.log("authController",req.userData);
      res.status(200).json({userData});

    } catch (error) {
      
    }
    
  }
};

module.exports = auth;
