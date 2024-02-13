const http = require("http");
const fs = require("fs");
const port = 9000;
const filename = "9-march-2023/new.js";
const directory = "9-march-2023";
http
  .createServer(function (req, res) {
    fs.unlink(
      `/home/administrator/Desktop/nodejsproject/${filename}`,
      function (err, data) {
        if (err) {
          res.end(`facing error ${err}`);
        } else {
          fs.rmdir(
            `/home/administrator/Desktop/nodejsproject/${directory}`,
            function (err, data) {
              if (err) {
                res.end(`facing error ${err}`);
              } else {
                console.log("data", data);
                res.end(
                  `${directory} directory deleted successfully please check now${data}`
                );
              }
            }
          );
        }
      }
    );
  })
  .listen(port, function () {
    console.log(`server listening on port ${port} http://localhost:${port}`);
  });
