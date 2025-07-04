const Product = require('../models/product');
const AppError = require('../error_handler/AppError');
const wrapAsync = require('../error_handler/AsyncError');
const getDataUri = require('../utils/dataUri');
const { ObjectId } = require('mongoose');
const cloudinary = require('cloudinary');
// to Create product


const createproduct = wrapAsync(async (req, res, next) => {
  const { name, description, category, price, stock, vendor } = req.body;

  if (!name || !description || !category || !price || !stock || !vendor) {
    return next(new AppError('some of the input fields is missing', 404));
  }
  
  if (!req.files) {
    return next(new AppError('product image not found', 404));
  }
  
  let images = [];
  for (let file in req.files){
    console.log( file )
    const fileUri = getDataUri(req.files[file]);
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);
    images.push({
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    });
  }

  const product = await Product.create({
    name,
    description,
    category,
    price,
    stock,
    images,
    vendor,
  });

  res.status(200).json({
    success: true,
    message: 'Product Created Successfully',
    product
  });
});

// to read all the product
const readallproducts = wrapAsync(async (req, res) => {
  const products = await Product.find({}).populate('category').populate('vendor');

  res.status(200).json({
    success: true,
    products,
  });
});

const searchproducts = wrapAsync(async (req, res) => {
  const { keyword, category } = req.query;
  const query = {
    name: {
      $regex: keyword ? keyword : '',
      $options: 'i',
    }
  };

  if (category !== undefined || category == '') {
    query.category = category;
  }

  const products = await Product.find(query).populate('category').populate('vendor');

  res.status(200).json({
    success: true,
    products,
  });
});

// Get Best Sellers
const readBestSellers = wrapAsync(async (req, res, next) => {
  const bestSellers = await Product.find({
    rating: { $gt: 4.5 }
  }).sort({rating: -1}).populate('category').populate('vendor');
  res.json({ success: true, products: bestSellers });
})

const readNewArrivals = wrapAsync(async (req, res, next)=>{
  const products = await Product.find().sort({ createdAt: -1 }).populate('category').populate('vendor').limit(10);
  res.json({ success: true, products });
})

// to read  the product
const readsingleproduct = wrapAsync(async (req, res, next) => {
  const product = await Product.findById(req.params._id).populate('category').populate('vendor');
  if (!product) {
    return next(new AppError('product not found', 404));
  }
  res.status(200).json({ success: true, product });
});

// to update the product
const updateproduct = wrapAsync(async (req, res, next) => {
  let product = await Product.findById(req.params._id);

  if (!product) {
    return next(new AppError('product not found', 404));
  }

  const { name, description, category, price, stock } = req.body;
  if (name) product.name = name;
  if (description) product.description = description;
  if (category) product.category = category;
  if (price) product.price = price;
  if (stock) product.stock = stock;

  await product.save();

  res.status(200).json({
    success: true,
    message: 'Product Updated Successfully',
    product
  });
});

// add Product Image
const addProductImage = wrapAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return next(new AppError('Product not found', 404));

  if (!req.file) return next(new AppError('Please add image', 400));

  const file = getDataUri(req.file);
  const myCloud = await cloudinary.v2.uploader.upload(file.content);
  const image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  product.images.push(image);
  await product.save();

  res.status(200).json({
    success: true,
    message: 'Image Added Successfully',
  });
});

const deleteProductImage = wrapAsync(async (req, res, next) => {
  const id = req.query.imageId;

  if (!id) return next(new AppError('Please Image Id', 400));
  const product = await Product.findById(req.params.id);

  if (!product) return next(new AppError('Product not found', 404));

  let isExist = -1;

  product.images.forEach((item, index) => {
    if (item._id.toString() === id.toString()) isExist = index;
  });

  if (isExist < 0) return next(new AppError("Image doesn't exist", 400));

  await cloudinary.v2.uploader.destroy(product.images[isExist].public_id);

  product.images.splice(isExist, 1);

  await product.save();

  res.status(200).json({
    success: true,
    message: 'Image Deleted Successfully',
  });
});

// to delete product
const removeproduct = wrapAsync(async (req, res, next) => {
  let product = await Product.findById(req.params._id).populate('category');
  if (!product) {
    return next(new AppError('product not found', 404));
  }

  for (let index = 0; index < product.images.length; index++) {
    await cloudinary.v2.uploader.destroy(product.images[index].public_id);
  }

  await product.deleteOne();
  res.status(200).json({
    success: true,
    message: 'Product Deleted Successfully',
  });
});

// to Admin Products
const getAdminProducts = wrapAsync(async (req, res, next) => {
  const products = await Product.find({}).populate('category').populate('vendor');

  const outOfStock = products.filter((i) => i.stock === 0);

  res.status(200).json({
    success: true,
    products,
    outOfStock: outOfStock.length,
    inStock: products.length - outOfStock.length,
  });
});



module.exports = {
  createproduct,
  readallproducts,
  readsingleproduct,
  removeproduct,
  updateproduct,
  getAdminProducts,
  addProductImage,
  deleteProductImage,
  readBestSellers,
  readNewArrivals,
  searchproducts
};
