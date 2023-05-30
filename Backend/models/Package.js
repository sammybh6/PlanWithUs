const mongoose = require('mongoose')
const slugify = require('slugify')
const StaySchema = require('./Stay')
const TransportSchema = require('./Transport')

const PackageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    // email: {
    //     type: String,
    //     unique: true,
    //     match: [
    //         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //         'Please add a valid email'
    //     ],
    //     required: [true, 'Please add an email']
    // },
    slug: String,
    modeOfTransport: {
        type: mongoose.Schema.ObjectId,
        ref: 'Transport'
    },
    stayMode: {
        type: mongoose.Schema.ObjectId,
        ref: 'Stay'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
})


// Create package slug from the name
PackageSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
})

// Cascade delete stays when a package is deleted
PackageSchema.pre('remove', async function (next) {
    console.log(`Stays being removed from package ${this._id}`);
    await this.model('Stay').deleteMany({ package: this._id });
    next();
})


// PackageSchema.pre('remove', async function (next) {
//     await this.model('Stay').deleteMany({
//         package: this._id
//     });
//     next();
// })

module.exports = mongoose.model("Package", PackageSchema);
