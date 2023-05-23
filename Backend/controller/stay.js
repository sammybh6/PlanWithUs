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
    let query;
    if(req.params.id)
    {
        query= Stay.find(req.params.id)
    }
    else
    {
        query= Stay.find()
    }
    const stays=await query;
    res.status(200).json({
        success:true,
        data:stays
    })
})