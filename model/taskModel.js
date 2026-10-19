import mongoose from "mongoose"
let taskSchema=mongoose.Schema({
    title:{
        type:String
    },
    discription:{
       type:String 
    },
    status:{
        type:String,
        enum:["pending","inprogress","completed"],
        default:"pending"
    }
})
let taskModel=mongoose.model("Taskmodel",taskSchema)

export default  taskModel