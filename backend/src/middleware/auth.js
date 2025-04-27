const jwt = require('jsonwebtoken');
const AppError = require('../error_handler/AppError');
const wrapAsync = require('../error_handler/AsyncError');
const User = require('../models/user');

const authenticateUser = wrapAsync(async (req, res, next) => {

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return next(new AppError('Login first to access this resource.', 401));
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return next(new AppError('Invalid or expired token.', 401));
    }
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(new AppError('User not found.', 401));
    }
    req.rootUser = user;
    next();
  })
});

const authorizeAdminRoles = (req, res, next) => {
  if (req.rootUser.role !== 'admin') {
    return next(
      new AppError(`only admin is  allowed to acccess this resource`, 401)
    );
  }
  next();
};

const authorizeVendorRoles = (req, res, next) => {
  if (req.rootUser.role !== 'vendor') {
    return next(
      new AppError(`only vendor is  allowed to acccess this resource`, 401)
    );
  }
  next();
};
const authorizeDeliveryRoles = (req, res, next) => {
  if (req.rootUser.role !== 'delivery') {
    return next(
      new AppError(`only vendor is  allowed to acccess this resource`, 401)
    );
  }
  next();
};

module.exports = { authenticateUser, authorizeAdminRoles, authorizeVendorRoles, authorizeDeliveryRoles };
