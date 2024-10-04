const Wallpaper = require("../../model/wallpaper.model");

const addWallpaper = async (req, res) => {
  try {
    const data = req.body;
    const wallpaperData = {
      wallpaperName: data.wallpaperName,
      wallpaperResolution: data.wallpaperResolution,
      categoryName: data.categoryName,
      wallpaperURL: data.wallpaperURL,
    };
    const wallpaper = await Wallpaper.create(wallpaperData);
    res.status(200).send({
      success: true,
      wallpaper: wallpaper,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

const getAllWallpaper = async (req, res) => {
  try {
    // Pagination functionality
    const page = parseInt(req.query.page) || 1;
    const limit = 12;
    const skip = (page - 1) * limit;

    // Category filter functionality
    let query = {};
    const category = req.query.category;
    if (category) {
      query.categoryName = category;
    }

    // Search functionality
    const search = req.query.search;
    if (search) {
      query.wallpaperName = { $regex: new RegExp(search, "i") };
    }

    const wallpaper = await Wallpaper.find(query)
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);

    const totalCount = await Wallpaper.countDocuments();

    res.status(200).send({
      success: true,
      wallpaper,
      totalCount,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
      success: false,
    });
  }
};

const deleteWallpaper = async (req, res) => {
  try {
    const id = req.params.id;
    const wallpaper = await Wallpaper.findByIdAndDelete(id);
    res.status(200).send({
      wallpaper,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
      success: false,
    });
  }
};

const updateWallpaper = async (req, res) => {
  try {
    const { id } = req.params;
    const { wallpaperName, wallpaperResolution, categoryName, wallpaperURL } =
      req.body;
    const updatedWallpaper = await Wallpaper.findByIdAndUpdate(
      id,
      { wallpaperName, wallpaperResolution, categoryName, wallpaperURL },
      { new: true } // This option ensures the response contains the updated document
    );

    if (!updatedWallpaper) {
      return res.status(404).json({
        message: "Wallpaper not found",
      });
    }
    res.status(200).json({
      message: "Wallpaper updated successfully",
      wallpaper: updatedWallpaper,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  addWallpaper,
  getAllWallpaper,
  deleteWallpaper,
  updateWallpaper,
};
