const Package = require('../models/Package');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')




exports.createPackages = asyncHandler(async (req, res, next) => {
    // console.log(req.body);
    // res.status(200).json({
    //     success: true
    // });
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

    if (req.params.stayId) {
        query = Package.find({ stayMode: req.params.stayId }).populate('stayMode')
    }
    else if (req.params.transportId) {
        query = (await Package.find({ modeOfTransport: req.params.transportId })).populate('modeOfTransport')
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

    const package = await Package.findByIdAndDelete(req.params.id);
    if (!package) {
        return next(new ErrorResponse(`Package not found with id of ${req.params.id}`, 404))
    }
    res.status(200).json({ success: true, data: {} })
});

