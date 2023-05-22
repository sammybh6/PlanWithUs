const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const Stay=require('../models/Stay')

exports.createStay= asyncHandler(async(req,res,next)=>{
    const stay=await Stay.create(req.body);
    res.status(201).json({
        success:true,
        data:stay
    })
})

exports.getStays=asyncHandler(async(req,res,next)=>{
    const stays=await Stay.find();
    res.status(200).json({
        success:true,
        data:stays
    })
})