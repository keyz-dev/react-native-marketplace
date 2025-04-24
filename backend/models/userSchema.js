const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const crypto = require('crypto');

const addressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },  
  street: {
    type: String,
  },
  postalCode: String,
  state: String,
  country: {
    type: String,
    default: 'Cameroon',
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter the name'],
    minLength: [3, 'Your name should be more than 3 char'],
    maxlength: [30, 'Your name should not be more than 30 char'],
  },
  email: {
    type: String,
    required: [true, 'Please enter the name'],
    unique: true,
    validate: [validator.isEmail, 'Not a valid email'],
  },
  phone: String,
  password: {
    type: String,
    required: [true, 'Please enter the password'],
    minLength: [6, 'Your password should not be less than 6 char'],
    select: false,
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ['male', 'female'],
      message: 'please select correct gender',
    },
  },
  address: addressSchema,
  dob: {
    type: Date,
    required: [true, 'please enter date of birth'],
  },
  role: {
    type: String,
    default: 'client',
    enum: {
      values: ['client', 'admin', 'vendor', 'delivery'],
      message: 'please select correct role',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userLikes: {
    // a list of products the user likes
    type: [Schema.Types.ObjectId],
    ref: 'Product',
    default: []
  },
  createdAt: { type: Date, default: Date.now },

  avatar: {
    public_id: String,
    url: String,
  },
  otp: Number,
  otp_expire: Date,
}, {timeStamps: true});

// hashing password before saving user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 12);
});

// for verify login and password
userSchema.methods.compareloginPasssword = async function (password) {
  const match = await bcrypt.compare(password, this.password);
  return match;
};

// Generating JWT token
userSchema.methods.generateAuthToken = async function () {
  let token = jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: '10d' }
  );

  return token;
};

const User = new mongoose.model('User', userSchema);
module.exports = User;
