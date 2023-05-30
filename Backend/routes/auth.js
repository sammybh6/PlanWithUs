const express = require('express');
const { register, login, getMe, fortgotPassword } = require('../controller/auth');
const { protect } = require('../middleware/auth');
const router = express.Router();
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/getuser').get(protect, getMe)

router.post('/forgotpassward', fortgotPassword);

module.exports = router;