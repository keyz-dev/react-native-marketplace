
const User = require('../models/user.js');
const AppError = require('../error_handler/AppError.js');
const wrapAsync = require('../error_handler/AsyncError.js');
const sendEmail = require('../utils/sendEmail.js');
const sendToken = require('../utils/jwtToken.js');
const getDataUri = require('../utils/dataUri.js');
const {validateClient, validateVendor, validateDelivery} = require('../validation/userValidator.js');

const cloudinary = require('cloudinary');

const createuser = wrapAsync(async (req, res, next) => {

  // parse the user address
  // req.body.address = JSON.parse(req.body.address)
    
  if (req.body.role === 'vendor') {
    // req.body.shopCoordinates = JSON.parse(req.body.shopCoordinates)
    const { value, error } = validateVendor(req.body);
    if (error) {
      return next(new AppError(error.details[0].message, 400));
    }
  }else if(req.body.role === 'delivery') {
    const { value, error } = validateDelivery(req.body);
    if (error) {
      return next(new AppError(error.details[0].message, 400));
    }
  }else {
    req.body.role = "client"
    const { value, error } = validateClient(req.body);
    if (error) {
      return next(new AppError(error.details[0].message, 400));
    }
  }

  // check if user already exist
  const {email} = req.body;
  let user = await User.findOne({ email });

  if (user) {
    return next(
      new AppError(`user already exist with this email id ${email}`, 400)
    );
  }

  let avatar = undefined;
  if (req.file) {
    const file = getDataUri(req.file);
    const myCloud = await cloudinary.v2.uploader.upload(file.content);
    avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }
  req.body.avatar = avatar;

  user = new User(req.body);
  user = await user.save();

  sendToken(user, res, `Registered Successfully`, 201);
});


// for login user
const loginin = wrapAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError('Please enter email & password', 401));
  }
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new AppError('Invalid user or password', 400));
  }

  const match = await user.compareloginPasssword(password);
  if (!match) {
    return next(new AppError('Invalid user or password', 404));
  }
  sendToken(user, res, `welcome Back ${user.name}`, 201);
});

module.exports = {
  createuser,
  loginin,
};

