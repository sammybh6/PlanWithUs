const mongoose = require('mongoose')

const TransportSchema = new mongoose.Schema({
    transportName: {
        type: String,
        required: [true, 'Please add a transport name']
    },
    transportDestination: {
        type: String,
        required: [true, 'Please add a transport destination']
    },
    transportSource: {
        type: String,
        required: [true, 'Please add a transport source']
    },
    transportType: {
        type: String,
        required: [true, 'Please add a transport type'],
        enum: [
            'Air',
            'Train'
        ]
    },
    transportPrice: {
        type: Number,
        required: [true, 'Please add a transport price']
    },
    departureDate: {
        type: Date,
        default: Date.now,
        required: [true, 'Please add a departure date']
    },
    noOfSeats: {
        type: Number,
        required: [true, 'Please add a number of seats']
    }
})

module.exports = mongoose.model("Transport", TransportSchema)