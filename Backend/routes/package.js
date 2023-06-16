
const express = require('express');

const { createPackages, getPackages, updatePackage, deletePackage } = require('../controller/package');
const { protect } = require('../middleware/auth');
const router = express.Router();
const stayRouter = require('./stay');
const transportRouter = require('./transport');

router.route('/').post(protect, createPackages).get(protect, getPackages);

router.route('/:id').put(protect, updatePackage).get(protect, getPackages);
router.route('/:id').delete(protect, deletePackage)
router.use('/:packageId/stay', stayRouter)
router.use('/:packageId/transport', transportRouter)

module.exports = router;