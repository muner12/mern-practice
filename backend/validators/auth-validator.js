
const {z}=require("zod");

const signUpSchema=z.object({
    username:z.
    string({required_error:"username is required"})
    .trim()
    .min(3,{message:"usename must be at least 3 charecotors"})
    .max(100,{message:"username should not be greater than 100 charecters"}),
    email:z.
    string({required_error:"email is required"})
    .trim()
    .email({message:"invalid Email address"})
    .min(3,{message:"email must be at least 3 charecters"})
    .max(100,{message:"email must not be greater than 100"}),
    phone:z.
    string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"phone must be at least 10 digits"})
    .max(14,{message:"phone number must not be greater 14 digits"}),
    password:z.
    string({required_error:"password is requied"})
    .trim()
    .min(7,{message:"password must be greater than 7 charecters"})
    .max(100,{message:"password shoud not be greater than 100"})
})

module.exports=signUpSchema