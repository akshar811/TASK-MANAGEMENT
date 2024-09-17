const express = require("express");
const connect = require("./config/db");
const cookies = require("cookie-parser");
const Route = require("./routes/user_route");
const TaskRoute = require("./routes/task_route");

require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookies());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/user", Route);
app.use("/product", TaskRoute);

app.get("/", (req, res) => {
    res.redirect("/user/signup");
  });

app.listen(process.env.PORT, () => {
  connect();
  console.log(`listening on port ${process.env.PORT}`);
});
