async function rootApi(req, res) {
    res.send({ message: "root api calling", status: 1 });
  }

module.exports = {rootApi}