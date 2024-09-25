const express = require("express");
const router = express.Router();
const { addCategory, getAllCategory, deleteCategory } = require("./routes");

router.post("/", addCategory);
router.get("/", getAllCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
