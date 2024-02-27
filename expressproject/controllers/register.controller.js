let user = [];
const emailHandler = require("../helper/email");
async function registerApi(req, res) {
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
    const msg = "registraion message sent successfully";
    const message = await emailHandler(msg, email);
    if (message) {
      res.send({
        message:
          "congrats your registeration successfully and welcome email has been sent.",
        status: 1,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
    } else {
      res.send({
        message: "welcome email failed",
        status: 0,
      });
    }
  }
}

module.exports = { registerApi };
