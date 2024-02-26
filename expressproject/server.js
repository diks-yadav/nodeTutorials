const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();
const checkfields = require("./middleware/checkfields");
const emailHandler = require("./helper/email");
const port = 8000;
const rootController = require("./controllers/root.controller");
const contactController = require("./controllers/contact.controller");
const registerController = require("./controllers/register.controller");
const loginController = require("./controllers/login.controller");
const getUserController = require("./controllers/get-user.controller");
const sendEmailController = require("./controllers/email-send.controller");
app.get("/", rootController.rootApi);
app.get("/home", rootController.homeApi);
app.get("/contact", contactController.contactApi);

app.get("/about", function (req, res) {
  res.send({ message: "about api calling", status: 1 });
});
app.post("/register", upload.single(), registerController.registerApi);
//login api's
app.post("/login", upload.single(), checkfields, loginController.loginApi);

//get user data
app.get("/api/users", getUserController.getUserApi);

//api to send welcome email via nodemailer

app.get("/api/email-send", sendEmailController.sendEmailApi);

app.listen(port, function () {
  console.log(`server listeninin on http://localhost:${port}`);
});
