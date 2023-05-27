const express=require('express');

const {createTransport,getTransports}=require('../controller/transport');
const {protect}=require('../middleware/auth');

const router=express.Router();

router.route('/').post(protect,createTransport).get(protect,getTransports);
router.route('/:id').get(protect,getTransports);


module.exports=router;
