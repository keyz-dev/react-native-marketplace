const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Please Enter Valid Category Name'],
  },
  description: {
    type: String,
    required: [true, 'Please Enter Valid Category Description'],
  },
  image: { public_id: String, url: String }
}, {timestamps: true});

const Category = mongoose.model('Category', schema);
module.exports = Category;
