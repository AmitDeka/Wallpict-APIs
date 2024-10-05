const express = require("express");
const router = express.Router();
const {
  addWallpaper,
  getAllWallpaper,
  getWallpaperById,
  deleteWallpaper,
  updateWallpaper,
} = require("./routes");

router.post("/", addWallpaper);
router.get("/", getAllWallpaper);
router.get("/:id", getWallpaperById);
router.delete("/:id", deleteWallpaper);
router.put("/:id", updateWallpaper);

module.exports = router;
