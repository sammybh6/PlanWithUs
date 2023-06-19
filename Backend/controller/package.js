const Package = require('../models/Package');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const Stay = require('../models/Stay')



exports.createPackages = asyncHandler(async (req, res, next) => {
    // console.log(req.body);
    // res.status(200).json({
    //     success: true
    // });
    req.body.user = req.user.id;
    console.log(req.body)
    const packages = await Package.create(req.body);
    res.status(201).json({
        success: true,
        data: packages
    });

});

// GET api/v1/package
// GET stay   api/v1/stay/:stayId/package
// GET transport api/v1/transport/:transportId/package

exports.getPackages = asyncHandler(async (req, res, next) => {
    let query;
    if (req.params.id) {
        query = Package.findById(req.params.id).populate('stayMode').populate('modeOfTransport')
    }
    else {
        query = Package.find().populate('stayMode').populate('modeOfTransport')
    }
    const packages = await query;
    res.status(200).json({
        success: true,
        count: packages.length,
        data: packages
    });
});

exports.updatePackage = asyncHandler(async (req, res, next) => {
    const package = await Package.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!package) {
        return next(new ErrorResponse(`Package not found with id of ${req.params.id}`, 404))
    }
    res.status(200).json({ success: true, data: package })
});

exports.deletePackage = asyncHandler(async (req, res, next) => {

    const packages = await Package.findById(req.params.id);
    if (!packages) {
        return next(new ErrorResponse(`Package not found with id of ${req.params.id}`, 404))
    }

    // const stay = await Stay.deleteMany({ package: req.params.id });
    // await stay.remove();

    res.status(200).json({ success: true, data: {} })
});

