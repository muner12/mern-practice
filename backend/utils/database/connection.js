require("dotenv").config();

const mongoose=require("mongoose");
const { MONGO_URL } = require("../constants");

 async function dbConnection(){
    
    if(mongoose.connections[0].readState)return
    try {
     await mongoose.connect(MONGO_URL);
        console.log("connected");
       
    } catch (error) {
        console.log(error);
    }

}

module.exports=dbConnection