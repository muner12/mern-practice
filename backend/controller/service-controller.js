
const Services = require("../models/service-model");
const service = async (req, res, next) => {
 

 
  try {

    const { title, image, description } = req.body;

 
    console.log(typeof description)
   if(!description || !image || !title){
    res.status(400).json({ message:"All Fields are requierd"});
   }
    
    const newService = new Services({
      title,
      image,
      description,
    });
    const response = await newService.save();
    res.status(200).json({ data:response});
  } catch (error) {
    console.log("controller", error);
  }
};
const serviceList=async(req,res,next) => {
try {
    const data = await Services.find();
    res.status(200).json({ data});

} catch (error) {
    console.log("controller", error);
}

}
module.exports = {service,serviceList};
