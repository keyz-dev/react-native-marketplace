const logger = require('../utils/logger');
const Joi = require('joi')
const mongoose = require('mongoose')
const multer = require('multer')
const errorHandler = (err, req, res, next) => {

  if (Object.keys(err).includes('errors')){
    err.message = err.errors[0].message
  }
  else if(Object.keys(err).includes('details')){
    err.message = err.details[0].message
  }
  
  logger.error(err.message)
  
  if (err instanceof Joi.ValidationError) {
    // Handle Joi validation errors
    return res.status(400).json({
      status: false,
      message: 'Validation error',
      error: err.message,
    });
  }

    // Custom middleware error handler
  if (err instanceof multer.MulterError) {
      message = null;
      if (err.code === 'LIMIT_FILE_SIZE') {
        message = { msg: err.message.toLowerCase()+ ', max file size is 8Mb', field: err.field }
      }
      return res.status(400).json({ 
        status: false,
        error: "File Upload Error",
        message: message || err.message.toLowerCase() });
  }
  
  // Handle Mongoose validation errors
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      status: false,
      error: 'Validation Error',
      message: err.message,
    });
  }

  // Handle Mongoose cast errors (e.g., invalid ObjectId)
  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      status: false,
      error: 'Invalid ID',
      message: `Invalid ${err.path}: ${err.value}`,
    });
  }

  // Handle other Mongoose errors
  if (err instanceof mongoose.Error) {
    return res.status(500).json({
      status: false,
      error: 'Mongoose Error',
      message: err.message,
    });
  }

  // Handle other types of errors (optional)
  return res.status(err.status || 500).json({
    status: false,
    error: 'Unknown error',
    message: err.message || 'Internal Server Error',
  });
};

module.exports = errorHandler;