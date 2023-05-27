const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const { googleLoginCallBack } = require('../utils/googleauth')

exports.gauth = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    googleLoginCallBack(req.body.code)
    res.status(200).json({
        success: true
    });

});