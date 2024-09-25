const express = require("express");
const router = express.Router();
const { addWallpaper, getAllWallpaper, deleteWallpaper } = require("./routes");

router.post("/", addWallpaper);
router.get("/", getAllWallpaper);
router.delete("/:id", deleteWallpaper);

module.exports = router;
