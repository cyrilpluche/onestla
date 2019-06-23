const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const frequentSchema = new Schema({
    userId: {
        type: String,
        required: [true, 'userId is requried']
    },
    clubId: {
        type: String,
        required: [true, 'clubId is requried']
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    state: {
        type: String,
        required: [true, 'State is required']
    }
});

module.exports = mongoose.model('Frequent', frequentSchema)