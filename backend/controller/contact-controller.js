const Contact=require("../models/contact-model");

const contact=async(req,res,next) => {

try {
    const {username,email,message} = req.body;
    if(!username || !email || !message) {
        return res.status(400).json({message:"All fields are required"});
    }

 const newContact=new Contact({
    username,
    email,
    message
 });
 const response=await newContact.save();
 res.status(200).json({data:response});

} catch (error) {
    console.log(error);
}

}

module.exports =contact