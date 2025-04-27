const Joi = require('joi');

// Address schema
const addressSchema = Joi.object({
  city: Joi.string().required(),
  street: Joi.string().optional(),
  postalCode: Joi.string().optional(),
  state: Joi.string().optional(),
  country: Joi.string().default('Cameroon')
});

// Coordinate schema
const coordinateSchema = Joi.object({
  lat: Joi.number().required(),
  lng: Joi.number().required()
});

// Shared fields
const baseUserSchema = {
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().optional(),
  whatsapp: Joi.string().optional(),
  password: Joi.string().min(6).required(),
  gender: Joi.string().valid('male', 'female').required(),
  address: addressSchema.required(),
  dob: Joi.date().required(),
  avatar: Joi.object({
    public_id: Joi.string(),
    url: Joi.string().uri()
  }).optional()
};

// Client schema
const clientSchema = Joi.object({
  ...baseUserSchema,
  role: Joi.string().valid('client').required()
});

// Vendor schema
const vendorSchema = Joi.object({
  ...baseUserSchema,
  role: Joi.string().valid('vendor').required(),
  shopName: Joi.string().required(),
  websiteURL: Joi.string().uri().optional(),
  shopDescription: Joi.string().optional(),
  shopCoordinates: coordinateSchema.required()
});

// Delivery schema
const deliverySchema = Joi.object({
  ...baseUserSchema,
  role: Joi.string().valid('delivery').required(),
  vehicleType: Joi.string().required(),
  deliveryZone: Joi.array().items(Joi.object({
    country: Joi.string().default('Cameroon'),
    city: Joi.string()
  }))
});

// Export validation
module.exports = {
  validateClient: (data) => clientSchema.validate(data),
  validateVendor: (data) => vendorSchema.validate(data),
  validateDelivery: (data) => deliverySchema.validate(data)
};
