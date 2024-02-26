async function rootApi(req, res) {
    res.send({ message: "root api calling", status: 1 });
  }

  async function homeApi (req, res) {
    res.send({ message: "home api calling", status: 1 });
  }

module.exports = {rootApi,homeApi}