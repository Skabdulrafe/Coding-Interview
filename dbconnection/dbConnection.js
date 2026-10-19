import mongoose from "mongoose";
let dbConnection=(dburl,dbname)=>{
    try{
mongoose.connect(dburl+dbname)
console.log("dbconnection is build")
} catch(err){
console.log(err)
}}
export default dbConnection