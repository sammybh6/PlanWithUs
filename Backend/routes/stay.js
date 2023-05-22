const express=require('express');

const {createStay,getStays}=require('../controller/stay');

const router=express.Router();

router.route('/').post(createStay).get(getStays);

module.exports=router;

