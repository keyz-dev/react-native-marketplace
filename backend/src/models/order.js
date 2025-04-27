const mongoose = require('mongoose');
const addressSchema = require('./address');

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  orderItems: [orderItemSchema],
  shippingAddress: addressSchema,
  paymentMethod: {
    type: String,
    enum: ['cash_on_delivery', 'credit_card', 'momo', 'om'],
    default: 'cash_on_delivery',
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending',
  },
  paymentTime: {
    type: Date,
    default: Date.now,
  },
  deliveryStatus: {
    type: String,
    enum: ['processing', 'shipped', 'delivered', 'cancelled'],
    default: 'processing',
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  deliveredAt: Date,
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
