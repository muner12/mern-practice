require("dotenv").config();
const express=require("express");
const dbConnection = require("./utils/database/connection");
const { PORT } = require("./utils/constants");
const router = require("./routes/auth-routes");
const cors=require('cors');
//const { PORT } = require("./utils/constants");



const app=express();
dbConnection();
app.use(cors({
    origin: ['http://localhost:5173', 'http://example.com'],
    optionsSuccessStatus: 200,
  }));

app.use(express.json());
app.use("/api",router)

app.listen(PORT,()=>console.log(`server is runnig on ${PORT}`))