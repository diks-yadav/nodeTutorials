const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();
const port = 8000;
app.get("/", function (req, res) {
  res.send({ message: "root api calling", status: 1 });
});

app.get("/home", function (req, res) {
  res.send({ message: "home api calling", status: 1 });
});
app.get("/contact", function (req, res) {
  res.send({ message: "contact api calling", status: 1 });
});
app.get("/about", function (req, res) {
  res.send({ message: "about api calling", status: 1 });
});
let user = [];
app.post("/register", upload.single(), function (req, res) {
  var value = 0;
  console.log("req.body", req.body);
  var { firstname, lastname, email, password } = req.body;
  user.forEach((data) => {
    console.log("email", data);
    if (data.email == email) {
      value++;
      res.send({
        message: "user already regsitered with thuis email",
        status: 0,
      });
    }
  });
  console.log("user", user);
  if (value == 0) {
    user.push({ email: email });
    res.send({
      message: "register api calling",
      status: 1,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });
  }
});
app.listen(port, function () {
  console.log(`server listeninin on http://localhost:${port}`);
});
