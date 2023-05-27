const express = require('express');
const { register, login, getMe } = require('../controller/auth');
const { protect } = require('../middleware/auth');
const router = express.Router();
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/getuser').get(protect, getMe)

module.exports = router;