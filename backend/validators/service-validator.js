
const {z}=require("zod");

const serviceValidatorSchema=z.object({
    title:z.
    string({required_error:"username is required"})
    .trim()
    .min(3,{message:"usename must be at least 3 charecotors"}),
    image:z.
    string({required_error:"email is required"}),
    
    phone:z.
    string({required_error:"phone is required"}),
    
})

module.exports=serviceValidatorSchema