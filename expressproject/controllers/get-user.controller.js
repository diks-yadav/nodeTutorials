const userData=require('../data/user-data')
async function getUserApi(req, res) {
  if (userData.length > 0) {
    res.send({
      message: "All user Details fetch successfully",
      status: 1,
      user: userData,
    });
  } else {
    res.send({ message: "User not found", status: 0 });
  }
}

module.exports = {
  getUserApi,
};
