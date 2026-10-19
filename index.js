import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./dbconnection/dbConnection.js";
import taskRoute from "./routes/taskRoute.js";
import bodyParser from "body-parser";
dotenv.config();
let app=express()
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use("/todo",taskRoute)
app.use("/rafe",(req,res)=>{res.send("backend is running")})
let port=process.env.PORT
let dburl=process.env.DBURL
let dbname=process.env.DBNAME
dbConnection(dburl,dbname)
app.listen(port,()=>{
    console.log("server is starting")
})
