const mongoose = require("mongoose");
const config = require("../config/default.js");
const ConnectDb = async () => {
  try {
    await mongoose.connect(config.URL).then(() => {
      console.log(`app is connect to database`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = ConnectDb;
