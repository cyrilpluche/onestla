const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        required: [true, 'Firstname is required']
    },
    lastname: {
        type: String,
        trim: true,
        required: [true, 'Lastname is required']
    },
    dateOfBirth: {
        type: Number,
        trim: true,
        min: [1900, 'Date of birth not valid'],
        required: [true, 'Date of birth is required']
    },
    status: {
        type: Number,
        trim: true,
        min: [0, 'Status lower than 0'],
        required: [true, 'Status is required']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required']
    },
    notifications: [
        {
            message: String,
            state: Number
        }
    ]
});

module.exports = mongoose.model('User', userSchema)