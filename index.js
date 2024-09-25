require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

connectDB();

const categoryRoutes = require("./routes/category/index");
app.use("/api/category", categoryRoutes);

const wallpaperRoutes = require("./routes/wallpaper/index");
app.use("/api/wallpaper", wallpaperRoutes);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
