
const express = require('express');

const { createPackages, getPackages, updatePackage, deletePackage } = require('../controller/package');

const router = express.Router({ mergeParams:true });

router.route('/').post(createPackages).get(getPackages);

router.route('/:id').put(updatePackage);
router.route('/:id').delete(deletePackage)

module.exports = router;