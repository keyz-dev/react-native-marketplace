// create and send token and save in the cookie.
const cookieOptions = require('./cookieOptions');
const sendToken = async (user, res, message, statusCode) => {
  // create Jwt token
  const token = await user.generateAuthToken();

  res
    .status(statusCode)
    .json({
      success: true,
      token,
      user,
      message: message,
    });
};

module.exports = sendToken;
