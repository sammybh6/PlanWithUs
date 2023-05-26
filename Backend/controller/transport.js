const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const Transport=require('../models/Transport')
const Package=require('../models/Package')

exports.createTransport= asyncHandler(async(req,res,next)=>{

    req,body.package=req.params.packageId;

    const package=Package.findById(req.params.packageId);

    if(!package)
    {
        console.log('package not present.')
    }

    const transports=await Transport.create(req.body);
    res.status(201).json({
        success:true,
        data:transports
    })
})

exports.getTransports=asyncHandler(async(req,res,next)=>{
    let query;
    if(req.params.id)
    {
        query= Transport.find(req.params.id)
    }
    else
    {
        query= Transport.find()
    }
    const transports=await query;
    res.status(200).json({
        success:true,
        data:transports
    })
})