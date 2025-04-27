  const express = require('express');
  const { singleUpload } = require('../middleware/multer');
  const {
    createuser,
    loginin
  } = require('../controller/auth');

  const router = express.Router();

  router.post('/register', singleUpload, createuser);
  router.post('/login', loginin);

  module.exports = router;
