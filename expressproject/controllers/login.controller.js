async function loginApi(req, res) {
    const { username, password } = req.body;
    res.send({
      message: "user login successfully",
      status: 1,
      username: username,
      password: password,
    });
  }
module.exports = {loginApi}