const express = require("express");
const app = express();
const multer = require("multer");
const nodemailer = require("nodemailer");
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
//login api's
app.post("/login", upload.single(), function (req, res) {
  const { username, password } = req.body;
  if (username && password) {
    res.send({
      message: "user login successfully",
      status: 1,
      username: username,
      password: password,
    });
  } else {
    res.send({ message: "All fields required", status: 0 });
  }
});

//get user data
app.get("/api/users", function (req, res) {
  const user = [
    {
      id: 1,
      name: "Abhishek",
      email: "abhishek@gmail.com",
    },
    {
      id: 2,
      name: "Arun",
      email: "arun@gmail.com",
    },
    {
      id: 3,
      name: "Aakash",
      email: "aakash@gmail.com",
    },
    {
      id: 4,
      name: "ganesh",
      email: "ganesh@gmail.com",
    },
    {
      id: 5,
      name: "harsh",
      email: "harsh@gmail.com",
    },
  ];
  if (user.length > 0) {
    res.send({
      message: "All user Details fetch successfully",
      status: 1,
      user: user,
    });
  } else {
    res.send({ message: "User not found", status: 0 });
  }
});

//api to send welcome email via nodemailer

app.get("/api/email-send", async function (req, res) {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "55303d93cabfa6",
      pass: "9082d6a171d56b",
    },
  });
  const info = await transport.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "durgesh@mailinator.com", // list of receivers
    subject: "Welcome ✔", // Subject line
    text: "Hello user", // plain text body
    html: "<b>Hello user</b>", // html body
  });
  if (info) {
    res.send({ message: "Email has been sent successfully", status: 1 });
  } else {
    res.send({ message: "Email sent fialed", status: 0 });
  }
});

app.listen(port, function () {
  console.log(`server listeninin on http://localhost:${port}`);
});
