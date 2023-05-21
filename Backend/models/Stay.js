const mongoose = require('mongoose')


const StaySchema = new mongoose.Schema({
    stayName: {
        type: String,
        required: [true, 'Please add a stay name']
    },
    stayAddress: {
        type: String,

    },
    stayDestination: {
        type: String,
        required: [true, 'Please add a stay destination']
    },
    stayType: {
        type: String,
        required: [true, 'Please add a stay type'],
        enum: [
            'Hotel',
            'AirBnb'
        ]
    },
    stayPrice: {
        type: Number,
        required: [true, 'Please add a stay price']
    },
    checkInDate: {
        type: Date,
        default: Date.now,
        required: [true, 'Please add a check in date']
    },
    checkOutDate: {
        type: Date,
        required: [true, 'Please add a check out date']
    },
    noOfRooms: {
        type: Number,
        // required: [true, 'Please add a number of rooms']
    },
})


module.exports = mongoose.model("Stay", StaySchema)