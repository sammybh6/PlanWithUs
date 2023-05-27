const express = require('express');

const { createStay, getStays } = require('../controller/stay');
const { protect } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });
// const router = express.Router();

router.route('/').post(protect,createStay).get(protect,getStays);
router.route('/:id').get(protect,getStays);



module.exports = router;

//api/v1/package/:packageid/stay