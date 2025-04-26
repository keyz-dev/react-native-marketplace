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
const { authenticateUser, authorizeAdminRoles, authorizeVendorRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/all', readallproduct);
router.get('/admin', authenticateUser, getAdminProducts);
router.post(
  '/create',
  authenticateUser,
  authorizeVendorRoles,
  multipleUpload,
  createproduct
);
// by Id
router.get('/:_id', readsingleproduct);
router.put('/:_id', authenticateUser, authorizeVendorRoles, updateproduct);
router.delete('/:_id', authenticateUser, authorizeVendorRoles, removeproduct);

router
  .route('/images/:id')
  .post(authenticateUser, authorizeVendorRoles, singleUpload, addProductImage)
  .delete(authenticateUser, authorizeVendorRoles, deleteProductImage);

// router.get('/admin', authenticateUser, authorizeAdminRoles, getAdminProducts);

module.exports = router;
