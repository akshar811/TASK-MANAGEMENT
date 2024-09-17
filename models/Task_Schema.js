const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  des: String,
  category: String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

let Task = mongoose.model("Task", TaskSchema);

module.exports = Task;  

