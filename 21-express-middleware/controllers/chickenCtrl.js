
const { sendFile } = require('fs');
const { join } = require('path');

module.exports.showChickens = (req, res, next) => {
  res.sendFile(join(__dirname, "../htmls/see-our-chickens.html"));
};