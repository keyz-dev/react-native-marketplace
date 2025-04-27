const express = require('express');

const {
    addCategory,
    readsinglecategory,
    updateCategory,
    getAllCategories,
    deleteCategory,
} = require('../controller/category');

const { singleUpload } = require('../middleware/multer');
const { authenticateUser, authorizeAdminRoles } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticateUser, authorizeAdminRoles, singleUpload, addCategory);
router.get('/', getAllCategories);

router.get('/:_id', readsinglecategory);
router.put('/admin/:_id', authenticateUser, authorizeAdminRoles, updateCategory);

router.delete(
  '/:_id',
  authenticateUser,
  authorizeAdminRoles,
  deleteCategory
);

module.exports = router;