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
        data: package
    });

});

exports.getPackages = asyncHandler(async (req, res, next) => {
    const packages = await Package.find();
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