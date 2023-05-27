const express = require('express');
const router = express.Router();
const { gauth } = require('../controller/gauth');


router.route('/').post(gauth);

module.exports = router;