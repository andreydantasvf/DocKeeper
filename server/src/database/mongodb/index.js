const mongoose = require("mongoose");

async function startDb() {
  mongoose.set('strictQuery', true);
  await mongoose.connect('mongodb+srv://andreydantasvf:cagada14@cluster0.w5qz6zg.mongodb.net/test', {
    useNewUrlParser: true
  })
    .catch(error => {
      console.log(error);
    });
}

module.exports = startDb;