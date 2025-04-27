const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter Name'],
  },
  description: {
    type: String,
    required: [true, 'Please Enter Description'],
  },
  price: {
    type: Number,
    required: [true, 'Please Enter Price'],
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  stock: {
    type: Number,
    required: [true, 'Please Enter Stock'],
  },
  rating: {
    type: Number,
    default: 0
  },
  images: [{ public_id: String, url: String }],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  }
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
