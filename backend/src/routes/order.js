const express = require('express');
const router = express.Router();
const {
  newOrder,
  getAdminOrders,
  getSingleOrder,
  processPayment,
  proccessOrder,
  getMyOrders,
  getVendorOrders,
  confirmVendorOrder,
  updateDeliveryStatus,
} = require('../controller/order');

const { authenticateUser, authorizeAdminRoles, authorizeVendorRoles, authorizeDeliveryRoles } = require('../middleware/auth');

router.post('/create', authenticateUser, newOrder);

router.put(
  '/update/:_id',
  authenticateUser,
  authorizeAdminRoles,
  proccessOrder
);

router.get('/:_id', authenticateUser, getSingleOrder);
router.get('/my', authenticateUser, getMyOrders);
router.post('/payment', authenticateUser, processPayment);
router.get('/admin', authenticateUser, authorizeAdminRoles, getAdminOrders);

// Vendor routes
router.get('/vendor', authenticateUser, authorizeVendorRoles, getVendorOrders);
router.put('/vendor/:id/confirm', authenticateUser, authorizeVendorRoles, confirmVendorOrder);
router.put('/vendor/:id/delivery', authenticateUser, authorizeVendorRoles, updateDeliveryStatus);

module.exports = router;
