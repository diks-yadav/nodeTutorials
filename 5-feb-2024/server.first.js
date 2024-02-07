const http = require("http");
const port=9000;
const {name,lastname}=require('./value');
console.log("name",name);
http
  .createServer(function (req, res) {
    res.end(`Hello, world by name:-${name},lastname:-${lastname} sir!`);
  })
  .listen(port, function () {
    console.log(`server listening on port ${port} http://localhost:${port}`);
  });
