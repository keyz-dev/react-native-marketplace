const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const ExpressError = require('./error_handler/ExpressError');
const apiRoutes = require('./routes/index');

const app = express();

// for middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use('/v2/api', apiRoutes);

// for middleware Error handler
app.use(ExpressError);

module.exports = app;
