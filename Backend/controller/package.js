const Package = require('../models/Package');
const ErrorResponse = require('../utils/errorResponse');

exports.createPackages = async (req, res, next) => {
    // console.log(req.body);
    // res.status(200).json({
    //     success: true
    // });
    try {
        const packages = await Package.create(req.body);
        res.status(201).json({
            success: true,
            data: package
        });
    } catch (err) {
        next(err);
    }
}

exports.getPackages = async (req, res, next) => {
    try {
        const packages = await Package.find();
        res.status(200).json({
            success: true,
            count: packages.length,
            data: packages
        });
    } catch (err) {
        next(err);
    }
}

exports.updatePackage = async (req, res, next) => {
    try {
        const package = await Package.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!package) {
            return next(new ErrorResponse(`Package not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({ success: true, data: package })
    } catch (err) {
        // res.status(400).json({ success: false })
        next(err);
    }
}

exports.deletePackage = async (req, res, next) => {
    try {
        const package = await Package.findByIdAndDelete(req.params.id);
        if (!package) {
            return next(new ErrorResponse(`Package not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({ success: true, data: {} })
    } catch (err) {
        next(err);
    }
}