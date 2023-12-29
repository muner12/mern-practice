const mongoose=require('mongoose');

const ServiceSchema=new mongoose.Schema({
    title:{
        type: 'string',
        required: true,
    },
    image:{
        type: 'string',
        required: true,
    },
    description:{
        type: 'string',
        required: true,
    }
    
},{timestamps:true});

const Services = mongoose.models.services || mongoose.model("Services",ServiceSchema);
module.exports =Services;