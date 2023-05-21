const Package = require('../models/Package');

exports.createPackage = async (req, res, next) => {
    try {
        const package = await Package.create(req.body);
        res.status(201).json({
            success: true,
            data: package
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
        console.log(err);
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
        res.status(400).json({
            success: false
        });
    }
}