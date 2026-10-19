import taskModel from "../model/taskModel.js"

export let taskpcontroller=async(req,res)=>{
    try{
        let data=req.body
let savedata= new taskModel(data);
await savedata.save();
res.json("task save successfully")
    }catch(err){
        console.log(err)
    }

}
export let gettaskcontroller=async(req,res)=>{
    try{
//let data=req.body
let getdata= await taskModel.find() 
//console.log( getdata)
res.json(getdata)
    }catch(err){
        console.log(err)
    }

}
export let updatetask=async(req,res)=>{
    try{
        let id=req.params.id
        let data=req.body
        console.log(id)
//console.log(data)
let updatedata= await taskModel.findByIdAndUpdate(id,data)
if(!updatedata){
    res.json("task not found")
}else{
res.json("data updated successfully")
}
    }catch(err){
        console.log(err)
    }

}
export let deletetask=async(req,res)=>{
    try{
        let id=req.params.id
        console.log(id)
//let data=req.body
let getdata= await taskModel.findByIdAndDelete(id) 
if(!getdata){
    res.json("task not found")
}else{
res.json("task deleted successfully")
}
    }catch(err){
        console.log(err)
    }

}