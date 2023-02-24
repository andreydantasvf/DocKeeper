require("dotenv/config");
const mongoose = require("mongoose");

async function startDb() {
  mongoose.set('strictQuery', true);
  await mongoose.connect(process.env.URI_MONGODB, {
    useNewUrlParser: true
  })
    .catch(error => {
      console.log(error);
    });
}

module.exports = startDb;