const express = require('express');
const cors = require('cors')

const {
  createproduct,
  readallproducts,
  readsingleproduct,
  removeproduct,
  updateproduct,
  getAdminProducts,
  addProductImage,
  deleteProductImage,
  readBestSellers,
  readNewArrivals,
  searchproducts
} = require('../controller/product');

const { singleUpload, multipleUpload } = require('../middleware/multer');
const { authenticateUser, authorizeAdminRoles, authorizeVendorRoles } = require('../middleware/auth');

const router = express.Router();

router.use(express.json({limit: "50mb", extended: false}))
router.use(express.urlencoded({limit: "50mb", extended: false}))
router.use(cors())

router.get('/', readallproducts);
router.get('/search', searchproducts);
router.get('/best-sellers', readBestSellers);
router.get('/new-arrivals', readNewArrivals);

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
