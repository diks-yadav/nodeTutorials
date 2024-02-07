const http = require("http");
const fs= require("fs");
const port=9000;
const filename="newfile.txt";
http
  .createServer(function (req, res) {
      fs.appendFile(`/home/administrator/Desktop/nodejsproject/${filename}`,'\n students:- We are good, what about you',function (err, data) {
           if(err){
            res.end(`facing error ${err}`);
           }
           else{
            console.log("data",data);
            res.end(`append new data in file and written in a file successfully ${data}`);
           }
    });
    })
  .listen(port, function () {
    console.log(`server listening on port ${port} http://localhost:${port}`);
  });
