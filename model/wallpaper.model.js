const mongoose = require("mongoose");

const wallpaperSchema = new mongoose.Schema(
  {
    wallpaperName: {
      type: String,
      required: true,
    },
    wallpaperResolution: {
      type: String,
      required: false,
    },
    categoryName: {
      type: String,
      required: true,
    },
    wallpaperURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Wallpapers = mongoose.model("Wallpapers", wallpaperSchema);
module.exports = Wallpapers;
