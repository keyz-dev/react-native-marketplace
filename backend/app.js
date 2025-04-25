const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const ExpressError = require('./error_handler/ExpressError');

const product = require('./routes/product');
const user = require('./routes/user');
const category = require('./routes/category');
const order = require('./routes/order');

const app = express();

// for middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/v2/api/product', product);
app.use('/v2/api/order', order);
app.use('/v2/api/user', user);
app.use('/v2/api/category', category);

// for middleware Error handler
app.use(ExpressError);

module.exports = app;
