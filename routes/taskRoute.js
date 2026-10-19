import express from "express";
import { deletetask, gettaskcontroller, taskpcontroller, updatetask } from "../controller/taskController.js";

const taskRoute = express.Router();
taskRoute.post("/addtask",taskpcontroller);
taskRoute.get("/gettask",gettaskcontroller);
taskRoute.delete("/delete/:id",deletetask)
taskRoute.put("/update/:id",updatetask)


export default taskRoute;