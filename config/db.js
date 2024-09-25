const mongoose = require("mongoose");

const mongoDbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.8iaxl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=WallPict`;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(mongoDbURI);
    console.log("Database connected successfully 😍😍");
  } catch (error) {
    console.error(error);
    console.log("Error in Database connection 😭😭");
  }
};

module.exports = connectDB;
