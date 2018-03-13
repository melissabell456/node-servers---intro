const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World - Welcome to Express!');
});

app.get('/time', (req, res) => {
  let currentDate = new Date();
  res.send(`The time is ${currentDate}`);
});

app.listen(8080, () => {
  console.log('listening on 8080');
});