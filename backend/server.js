require("dotenv").config();
const express=require("express");
const dbConnection = require("./utils/database/connection");
const { PORT } = require("./utils/constants");
const router = require("./routes/routes");

const cors=require('cors');
const errorMiddleware = require("./middleware/error-middlware");
//const serviceMiddleware = require("./middleware/service-middleware");
//const { PORT } = require("./utils/constants");



const app=express();

app.use(cors({
    origin: ['http://localhost:5173', 'http://example.com'],
    optionsSuccessStatus: 200,
  }));

app.use(express.json());

app.use("/api",router);



app.use(errorMiddleware);

dbConnection();
app.listen(PORT,()=>console.log(`server is runnig on ${PORT}`))