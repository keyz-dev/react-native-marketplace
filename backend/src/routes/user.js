const express = require('express');
const 
 { singleUpload } = require('../middleware/multer');
const {
  forgotPassword,
  logout,
  resetPassword,
  updatePassword,
  updateByUser,
  updatePicByUser,
  getUserProfile,
} = require('../controller/user');

const { authenticateUser } = require('../middleware/auth');
const router = express.Router();

router.post('/forgotpassword', forgotPassword);
router.get('/profile', authenticateUser, getUserProfile);
router.put('/resetpassword', resetPassword);
router.put('/updateprofile', authenticateUser, updateByUser);
router.put('/updatepic', authenticateUser, singleUpload, updatePicByUser);
router.put('/updatepassword', authenticateUser, updatePassword);
router.post('/logout', authenticateUser, logout);

module.exports = router;
