
const express = require('express');

const { createPackage, getPackages } = require('../controller/package');

const router = express.Router();

router.route('/').post(createPackage).get(getPackages);

module.exports = router;