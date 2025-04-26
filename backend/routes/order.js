const express = require('express');

const router = express.Router();

const {
  newOrder,
  getAdminOrders,
  getSingleOrder,
  processPayment,
  proccessOrder,
  getMyOrders,
} = require('../controller/order');
const { authenticateUser, authorizeAdminRoles } = require('../middleware/auth');

router.post('/create', authenticateUser, newOrder);

router.put(
  '/admin/update/:_id',
  authenticateUser,
  authorizeAdminRoles,
  proccessOrder
);

router.get('/getsinglerorder/:_id', authenticateUser, getSingleOrder);

router.get('/loginUserorder', authenticateUser, getMyOrders);

router.post('/payment', authenticateUser, processPayment);

router.get('/admin', authenticateUser, authorizeAdminRoles, getAdminOrders);

module.exports = router;
