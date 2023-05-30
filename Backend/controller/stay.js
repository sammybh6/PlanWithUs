const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const Stay = require('../models/Stay')
const Package = require('../models/Package')

exports.createStay = asyncHandler(async (req, res, next) => {
    req.body.package = req.params.packageId;
    console.log(req.body.package);
    const package = await Package.findById(req.params.packageId);
    if (!package) {

        console.log('package not present.')
    }
    const stay = await Stay.create(req.body);
    //update the package
    package.stayMode = (stay._id);

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

exports.updateStay = asyncHandler(async (req, res, next) => {
    const stay = await Stay.findById(req.params.stayId);
    const packageId = stay.package;
    const package = await Package.findById(packageId);
    const user = package.user;
    console.log(user);
    if (user.toString() !== req.user.id) {
        return (next(new ErrorResponse(`This package was not created by this user ${req.user.id}`, 403)))
    }

    const update = await Stay.findByIdAndUpdate(req.params.stayId, req.body,
        {
            new: true,
            runValidators: true
        })
    res.status(200).json({
        success: true,
        data: update
    })
})