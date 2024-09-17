const Task = require("../models/Task_Schema");

const Addtask = (req, res) => {
  res.render("AddTask");
};

const Tasks = async (req, res) => {
  let { title, des, category } = req.body;
  const data = await Task.create(req.body);
  res.redirect("/user/User")
};

const DisplayTask = async (req, res) => {
  let data = await Task.find({ userID: req.body.userID });
  console.log(data);

  res.json(data);
};

// delte Task
const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  let data = await Task.find({ userID: req.body.userID });
  res.redirect("/user/User");
};

//admin task display

const AdminTaskDisplay = async (req, res) => {
    let data = await Task.find();
    console.log(data);
  
    res.json(data);
  };


// update task

const updateTask = async (req, res) => {
    let {title,des,category,_id} = req.body;

    let data = await Task.findByIdAndUpdate(_id , req.body);
    res.redirect("/user/User");
};




// SEARCH TASK

  const searchTasks = async (req, res) => {
    const { category } = req.query;
    try {
        let data;
        if (category) {
            
            data = await Task.find({ category: { $regex: new RegExp(category, "i") } });
        } else {
            data = await Task.find(); 
        }
        res.json(data);  
    } catch (error) {
        res.status(500).json({ error: "Error fetching tasks" });
    }
};



module.exports = { Addtask, Tasks, DisplayTask, deleteTask , AdminTaskDisplay , searchTasks , updateTask};
