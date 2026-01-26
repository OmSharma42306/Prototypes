import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const jwt_secret = process.env.jwt_secret;

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());


// auth endpoint

// infernce endpoint
app.get('/de',(req:Request,res:Response)=>{
    
    res.status(200).json("hello");
    return;
});




app.listen(PORT,()=>{
    console.log(`Server Started at PORT : ${PORT}`);
});