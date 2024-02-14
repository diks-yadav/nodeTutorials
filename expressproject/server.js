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
app.post("/register", upload.single(), function (req, res) {
  console.log("req.body", req.body);
  var amount = req.body.amount;
  var type = req.body.type;
  if (type == 1) {
    var totalAmount = +amount;
  } else {
    var totalAmount = +amount * 80;
  }
  res.send({ message: "register api calling", status: 1, amount: totalAmount });
});
app.listen(port, function () {
  console.log(`server listeninin on http://localhost:${port}`);
});
