async function contactApi (req, res) {
    res.send({ message: "contact api calling", status: 1 });
  }

module.exports ={contactApi};