const express = require('express');
const router = express.Router();
const { auth } = require('../controller/auth');


router.route('/auth').post(auth);

module.exports = router;