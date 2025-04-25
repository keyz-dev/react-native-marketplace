const express = require('express');

const {
    addCategory,
    readsinglecategory,
    updateCategory,
    getAllCategories,
    deleteCategory,
} = require('../controller/category');

const 
 { singleUpload } = require('../middleware/multer');
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticateUser, authorizeRoles, singleUpload, addCategory);
router.get('/', getAllCategories);

router.get('/:_id', readsinglecategory);
router.put('/admin/:_id', authenticateUser, authorizeRoles, updateCategory);


router.delete(
  '/:_id',
  authenticateUser,
  authorizeRoles,
  deleteCategory
);

module.exports = router;