const express = require('express');
const app = express();
const routes = require('./routes/');

app.use("/", routes);

// app.use(express.static(__dirname + "/public", { extensions: "html" }));

app.listen(8080, () => {
  console.log("running on 8080");
});