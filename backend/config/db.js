const mongoose = require("mongoose");

const mongodb = async () => {
  try {
    const database = await mongoose.connect(
      "mongodb://127.0.0.1:27017/courseManagement"
    );
    console.log("database connect..");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = mongodb;
