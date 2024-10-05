const Category = require("../../model/category.model");

const addCategory = async (req, res) => {
  try {
    const data = req.body;
    const categoryData = {
      categoryName: data.categoryName,
      categoryBanner: data.categoryBanner,
    };
    const category = await Category.create(categoryData);
    res.status(200).send({
      category: category,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    const totalCount = await Category.countDocuments();

    res.status(200).send({
      success: true,
      category,
      totalCount,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findById(id);
    res.status(200).send({
      success: true,
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { categoryName },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.status(200).json({
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  addCategory,
  getAllCategory,
  getCategoryById,
  deleteCategory,
  updateCategory,
};
