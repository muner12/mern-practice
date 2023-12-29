const mongoose=require('mongoose');

const contactSchema=new mongoose.Schema({
    username:{
        type: 'string',
        required: true,
    },
    email:{
        type:'string',
        required: true,

    },
    message:{
        type:'string',
        required: true,
    }
    
},{timestamps:true});

const Contact=mongoose.models.Contact || mongoose.model("Contact",contactSchema);

module.exports = Contact