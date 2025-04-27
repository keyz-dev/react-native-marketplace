const Category = require('../models/category');
const AppError = require('../error_handler/AppError');
const wrapAsync = require('../error_handler/AsyncError');
const getDataUri = require('../utils/dataUri');
const { ObjectId } = require('mongoose');
const cloudinary = require('cloudinary');
// to Create category

const addCategory = wrapAsync(async (req, res, next) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return next(new AppError('some of the input fields is missing', 404));
  }
  let image;
  if (!req.file) {
    return next(new AppError('category image not found', 404));
  }
  const file = getDataUri(req.file);
  const myCloud = await cloudinary.v2.uploader.upload(file.content);
  image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };
 
  await Category.create({
    name,
    description,
    image,
  });

  res.status(200).json({
    success: true,
    message: 'Category Created Successfully',
  });
});

// to read  the category
const readsinglecategory = wrapAsync(async (req, res, next) => {
  const category = await Category.findById(req.params._id).populate('category');
  if (!category) {
    return next(new AppError('category not found', 404));
  }
  res.status(200).json({ success: true, category });
});

// to update the category
const updateCategory = wrapAsync(async (req, res, next) => {
  let category = await Category.findById(req.params._id);

  if (!category) {
    return next(new AppError('category not found', 404));
  }

  const { name, description } = req.body;

  if (name) category.name = name;
  if (description) category.description = description;

  await category.save();

  res.status(200).json({
    success: true,
    message: 'Category Updated Successfully',
  });
});
  
  // get all category
  const getAllCategories = wrapAsync(async (req, res, next) => {
    const categories = await Category.find({});
  
    res.status(200).json({
      success: true,
      categories,
    });
  });
  
  const deleteCategory = wrapAsync(async (req, res, next) => {
    const category = await Category.findById(req.params._id);
    if (!category) return next(new AppError('Category Not Found', 404));
    const products = await Product.find({ category: category._id });
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      product.category = undefined;
      await product.save();
    }
  
    await category.deleteOne();
  
    res.status(200).json({
      success: true,
      message: 'Category Deleted Successfully',
    });
  });

  module.exports = {
    addCategory,
    readsinglecategory,
    updateCategory,
    getAllCategories,
    deleteCategory,
  };