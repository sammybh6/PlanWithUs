
const express = require('express');

const { createPackages, getPackages, updatePackage, deletePackage } = require('../controller/package');

const router = express.Router({ mergeParams: true });
const stayRouter = require('./stay');

router.route('/').post(createPackages).get(getPackages);

router.route('/:id').put(updatePackage);
router.route('/:id').delete(deletePackage)
router.use('/:packageId/stay', stayRouter)

module.exports = router;