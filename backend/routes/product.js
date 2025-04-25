const express = require('express');

const {
  createproduct,
  readallproduct,
  readsingleproduct,
  removeproduct,
  updateproduct,
  getAdminProducts,
  addProductImage,
  deleteProductImage
} = require('../controller/product');

const { singleUpload, multipleUpload } = require('../middleware/multer');
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/all', readallproduct);
router.get('/admin', authenticateUser, getAdminProducts);
router.post(
  '/create',
  authenticateUser,
  authorizeRoles,
  multipleUpload,
  createproduct
);
// by Id
router.get('/productbyid/:_id', readsingleproduct);
router.put('/admin/:_id', authenticateUser, authorizeRoles, updateproduct);
router.delete('/admin/:_id', authenticateUser, authorizeRoles, removeproduct);

router
  .route('/images/:id')
  .post(authenticateUser, authorizeRoles, singleUpload, addProductImage)
  .delete(authenticateUser, authorizeRoles, deleteProductImage);

// router.get('/admin', authenticateUser, authorizeRoles, getAdminProducts);

module.exports = router;
