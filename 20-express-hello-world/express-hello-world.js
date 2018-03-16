const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World - Welcome to Express!');
});

app.get('/time', (req, res) => {
  let currentDate = new Date();
  res.send(`The time is ${currentDate}`);
});

let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening on ${port}`);
});