const mongoose = require('mongoose')
const slugify = require('slugify')

const PackageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    email: {
        type: String,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ],
        required: [true, 'Please add an email']
    },
    slug: String,
    modeOfTransport: {
        type: String,
        required: [true, 'Please add a mode of transport'],
        enum: [
            'Air',
            'Train'
        ]
    },
    stayMode: {
        type: String,
        required: [true, 'Please add a stay mode'],
        enum: [
            'Hotel',
            'AirBnb'
        ]
    },

})

// Create package slug from the name
PackageSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
})

module.exports = mongoose.model("Package", PackageSchema);
