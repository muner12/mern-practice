require("dotenv").config();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const { hash } = require("bcrypt");
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});


userSchema.methods.generateToken=async function (){
    
    try {
        
        return jwt.sign({
            id:this._id,
            email:this.email,
            isAdmin:this.isAdmin
        },process.env.JWT_SECRET_KEY,{
            expiresIn:"30d"
        })
    } catch (error) {
        console.log(error)
        
    }
}

userSchema.pre("save",async function (){
    const user=this
    const salt= await bcrypt.genSalt(10);
    try{
        const hashed_password= await bcrypt.hash(user.password,salt);
        user.password=hashed_password
    }catch(error){

    }
})

const User=mongoose.model("User",userSchema);
module.exports=User;