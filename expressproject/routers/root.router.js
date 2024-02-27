const express = require("express");
const multer = require("multer");
const upload = multer();
const Router = express.Router();
const rootController = require("../controllers/root.controller");
const contactController = require("../controllers/contact.controller");
const registerController = require("../controllers/register.controller");
const loginController = require("../controllers/login.controller");
const getUserController = require("../controllers/get-user.controller");
const sendEmailController = require("../controllers/email-send.controller");
const checkfields = require("../middleware/checkfields");
Router.get("/", rootController.rootApi);

Router.get("/home", rootController.homeApi);
Router.get("/contact", contactController.contactApi);

Router.get("/about", function (req, res) {
  res.send({ message: "about api calling", status: 1 });
});
Router.post("/register", upload.single(), registerController.registerApi);
//login api's
Router.post("/login", upload.single(), checkfields, loginController.loginApi);

//get user data
Router.get("/api/users", getUserController.getUserApi);

//api to send welcome email via nodemailer

Router.get("/api/email-send", sendEmailController.sendEmailApi);
module.exports = Router;
