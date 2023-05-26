const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const Stay = require('../models/Stay')
const Package = require('../models/Package')

exports.createStay = asyncHandler(async (req, res, next) => {
    req.body.package = req.params.packageId;
    console.log(req.body.package);
    const package =await  Package.findById(req.params.packageId);
    if (!package) {

        console.log('package not present.')
    }
    const stay = await Stay.create(req.body);
    //update the package
    package.stayMode= (stay._id);
    
    await package.save();
    res.status(201).json({
        success: true,
        data: stay
    })

})


exports.getStays = asyncHandler(async (req, res, next) => {
    let query;
    if (req.params.id) {
        query = Stay.find(req.params.id)
    }
    else {
        query = Stay.find()
    }
    const stays = await query;
    res.status(200).json({
        success: true,
        data: stays
    })
})