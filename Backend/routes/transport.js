const express=require('express');

const {createTransport,getTransports}=require('../controller/transport');

const router=express.Router();

router.route('/').post(createTransport).get(getTransports);

module.exports=router;
