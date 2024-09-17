const { Router } = require("express");
const { Addtask, Tasks, DisplayTask, deleteTask, AdminTaskDisplay, searchTasks, updateTask } = require("../controllers/Task_controller");
const { Auth } = require("../middleware/Auth");

const TaskRoute = Router();

TaskRoute.get("/Addtask",Auth,Addtask);
TaskRoute.post("/Addtasks",Auth,Tasks);
TaskRoute.get("/DisplayTask",Auth,DisplayTask);
TaskRoute.delete("/DeleteTask/:id",deleteTask);
TaskRoute.get("/AdminTaskDisplay",AdminTaskDisplay);
TaskRoute.get("/searchTasks",searchTasks);
TaskRoute.post("/updateTask",updateTask);

module.exports = TaskRoute;