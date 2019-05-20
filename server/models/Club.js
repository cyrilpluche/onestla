const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required']
    },
    description: {
        type: String,
        trim: true,
    },
    lat: {
        type: Number,
        required: [true, 'Latitude is required']
    },
    lng: {
        type: Number,
        required: [true, 'Longitude is required']
    },
    type: {
        type: Number,
        trim: true,
        required: [true, 'Type is required']
    },
    iconUrl: {
        type: String,
    }
});

module.exports = mongoose.model('Club', clubSchema)