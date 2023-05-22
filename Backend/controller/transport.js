const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const Transport=require('../models/Transport')

exports.createTransport= asyncHandler(async(req,res,next)=>{
    const Transport=await Transport.create(req.body);
    res.status(201).json({
        success:true,
        data:Transport
    })
})

exports.getTransports=asyncHandler(async(req,res,next)=>{
    const Transports=await Transport.find();
    res.status(200).json({
        success:true,
        data:Transports
    })
})