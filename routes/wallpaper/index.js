const express = require("express");
const router = express.Router();
const {
  addWallpaper,
  getAllWallpaper,
  deleteWallpaper,
  updateWallpaper,
} = require("./routes");

router.post("/", addWallpaper);
router.get("/", getAllWallpaper);
router.delete("/:id", deleteWallpaper);
router.put("/:id", updateWallpaper);

module.exports = router;
