const mongoose = require('mongoose');

const magnetSchema = new mongoose.Schema({
  title: String,
  magnetLink: String,
});

const Magnet = mongoose.model('Magnet', magnetSchema);
module.exports = Magnet;
