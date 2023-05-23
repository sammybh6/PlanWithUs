const express=require('express');

const {createStay,getStays}=require('../controller/stay');


const router=express.Router();

router.route('/').post(createStay).get(getStays);
router.route('/:id').get(getStays);

const packageRouter= require('./package')

router.use('/:stayId/package', packageRouter)

module.exports=router;

