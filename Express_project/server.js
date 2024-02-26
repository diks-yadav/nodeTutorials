const express = require("express");
const app = express();
const port = 9090;
const multer = require("multer");
const upload = multer();
app.get("/", (req, res) => {
  res.send({ message: "hello world!", status: 1 });
});
app.get("/home", (req, res) => {
  res.send({ message: "hello world! at home url", status: 1 });
});
//post register api
app.post("/register", upload.single(), (req, res) => {
  console.log("req.body data: ", req.body);
  const { name, email, password, address } = req.body;
  if (name && email && password) {
    res.send({
      message: "registration success!",
      status: 1,
      name: name,
      email: email,
      password: password,
      address: address,
    });
  } else {
    res.send({
      message: "All fields required",
      status: 0,
    });
  }
});

app.post("/login", upload.single(), (req, res) => {
  const { email, password } = req.body;
  res.send({
    message: "login success!",
    status: 1,
    email: email,
    password: password,
  });
});

const user = [
  { id: 1, name: "xyz", email: "xyz@gmail.com" },
  { id: 2, name: "abc", email: "abc@gmail.com" },
  { id: 3, name: "pqr", email: "pqr@gmail.com" },
  { id: 4, name: "stu", email: "stu@gmail.com" },
  { id: 5, name: "wxy", email: "wxy@gmail.com" },
];
//get-users api
app.get("/api/get-users", function (req, res) {
  res.send({
    message: "users details fetched successfully",
    status: 1,
    users: user,
  });
});
//user-post api
app.post("/api/user-post", upload.single(), function (req, res) {
  const { username, email } = req.body;
  user.push({ id: user.length + 1, name: username, email: email });
  res.send({ message: "user pushed successfully", status: 1, users: user });
});

app.listen(port, function () {
  console.log(`server running on port http://localhost:${port}`);
});

//path,url,end-points
