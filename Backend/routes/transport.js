const express = require('express');

const { createTransport, getTransports, updateTransport } = require('../controller/transport');
const { protect } = require('../middleware/auth');


const router = express.Router({ mergeParams: true });

router.route('/').post(protect, createTransport).get(protect, getTransports);
router.route('/:id').get(protect, getTransports).put(protect, updateTransport);


module.exports = router;


