const mongoose = require("mongoose");

const Stat = mongoose.model('Stat', {
  users: Number,
  categories: Number,
  articles: Number,
  createdAt: Date
});

module.exports = Stat;