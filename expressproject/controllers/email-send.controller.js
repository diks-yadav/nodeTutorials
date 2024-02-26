async function sendEmailApi(req, res) {
  const msg = "welcome to our application";
  const user = "girexe7988@gmail.com";
  const message = await emailHandler(msg, user);
  if (message) {
    res.send({ message: "Email has been sent successfully", status: 1 });
  } else {
    res.send({ message: "Email sent fialed", status: 0 });
  }
}

module.exports = { sendEmailApi };
