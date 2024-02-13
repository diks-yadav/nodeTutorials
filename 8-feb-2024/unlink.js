const http = require("http");
const fs= require("fs");
const port=9000;
const filename="durgesh.pdf";
http
  .createServer(function (req, res) {
      fs.unlink(`/home/administrator/Desktop/nodejsproject/${filename}`,function (err, data) {
           if(err){
            res.end(`facing error ${err}`);
           }
           else{
            console.log("data",data);
            res.end(`${filename} File deleted successfully please check now${data}`);
           }
    });
    })
  .listen(port, function () {
    console.log(`server listening on port ${port} http://localhost:${port}`);
  });
