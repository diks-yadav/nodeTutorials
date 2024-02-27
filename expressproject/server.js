const express = require("express");
const app = express();
const port = 8000;
const rootRouter=require("./routers/root.router");
app.use('/',rootRouter);
app.listen(port, function () {
  console.log(`server listeninin on http://localhost:${port}`);
});
