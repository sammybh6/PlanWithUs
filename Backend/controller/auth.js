const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const sendEmail = require('../utils/sendEmail');
const User = require('../models/User')
const crypto = require('crypto')

exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;
    // Create user
    const user = await User.create({
        name,
        email,
        password
    });

    const token = user.getSignedJwtToken();

    res.status(200).json({
        success: true,
        token: token
    });
}
);


// Login user
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    // Validate email & password
    if (!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400));
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }
    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    sendTokenResponse(user, 200, res);
}
);

exports.getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id)

    res.status(200).json({
        success: true,
        data: user
    })
})



// get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),

        
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token
        })
}


// forgot password
// api/v1/auth/forgotpassword
exports.forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new ErrorResponse(`There is no user with that email`, 404));
    }

    //reset Token
    const resetToken = user.getResetPasswordToken();

    await user.save({
        validateBeforeSave: false
    })

    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetpassword/${resetToken}`;

    const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Password reset token',
            message
        })
        res.status(200).json({
            success: true,
            data: 'Email sent'
        })
    } catch (err) {
        console.log(err)
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({
            validateBeforeSave: false
        })
        return next(new ErrorResponse(`Email could not be sent`, 500));

    }
    res.status(200).json({
        success: true,
        data: user
    })
})


exports.resetPassword = asyncHandler(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resettoken).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorResponse('Invalid Token', 400))
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendTokenResponse(user, 200, res);
})

exports.updateDetails = asyncHandler(async (req, res, next) => {
    const fieldsToUpdate = {
        name: req.body.name,
        email: req.body.email
    }

    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
        new: true,
        runValidators: false
    })

    res.status(201).json({
        success: true,
        data: user
    })
})

exports.updatePassword = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');
    if (!(await user.matchPassword(req.body.currentPassword))) {
        next(new ErrorResponse('Invalid Password', 401))
    }
    user.password = req.body.newPassword;

    await user.save();

    sendTokenResponse(user, 200, res);

})  


exports.logout = asyncHandler(async (req, res, next) => {
    res.cookie('token',"none" , {
        expires: new Date(Date.now() + 10 * 1000),
    })

    res.status(200).json({
        success:true,
        data:{}
    })
})

