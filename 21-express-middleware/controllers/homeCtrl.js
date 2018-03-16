
const { sendFile } = require('fs');
const { join } = require('path');

module.exports.displayHome = (req, res, next) => {
  res.sendFile(join(__dirname, "../htmls/home.html"));
};