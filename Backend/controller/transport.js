const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const Transport = require('../models/Transport')
const Package = require('../models/Package')

exports.createTransport = asyncHandler(async (req, res, next) => {

    req.body.package = req.params.packageId;

    const package = Package.findById(req.params.packageId);

    if (!package) {
        console.log('package not present.')
    }

    const transports = await Transport.create(req.body);
    res.status(201).json({
        success: true,
        data: transports
    })
})

exports.getTransports = asyncHandler(async (req, res, next) => {
    let query;
    if (req.params.id) {
        query = Transport.find(req.params.id)
    }
    else {
        query = Transport.find()
    }
    const transports = await query;
    res.status(200).json({
        success: true,
        data: transports
    })
})


exports.updateTransport = asyncHandler(async (req, res, next) => {
    const transport = await Transport.findById(req.params.transportId);
    const packageId = transport.package;
    const package = await Package.findById(packageId);
    const user = package.user;
    console.log(user);
    if (user.toString() !== req.user.id) {
        return (next(new ErrorResponse(`This package was not created by this user ${req.user.id}`, 403)))
    }

    const update = await Transport.findByIdAndUpdate(req.params.transportId, req.body,
        {
            new: true,
            runValidators: true
        })
    res.status(200).json({
        success: true,
        data: update
    })
})