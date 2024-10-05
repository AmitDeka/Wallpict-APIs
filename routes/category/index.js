const express = require("express");
const router = express.Router();
const {
  addCategory,
  getAllCategory,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require("./routes");

router.post("/", addCategory);
router.get("/", getAllCategory);
router.get("/:id", getCategoryById);
router.delete("/:id", deleteCategory);
router.put("/:id", updateCategory);

module.exports = router;
