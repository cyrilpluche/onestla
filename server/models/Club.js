const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleUnitSchema = {
    open: {type: Boolean, required: [true, 'Is monday open ?']},
    start: {type: Date},
    end: {type: Date}
}

const scheduleSchema = {
    monday: {type: scheduleUnitSchema},
    tuesday: {type: scheduleUnitSchema},
    wednesday: {type: scheduleUnitSchema},
    thursday: {type: scheduleUnitSchema},
    friday: {type: scheduleUnitSchema},
    saturday: {type: scheduleUnitSchema},
    sunday: {type: scheduleUnitSchema}
}

const specialDay = {
    date: {type: Date, required: [true, 'Date on special days is required']},
    open: {type: Boolean, required: [true, 'Open on special days is required']},
    start: {type: Date},
    end: {type: Date}
}

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
    schedule: {
        type: scheduleSchema,
        required: [true, 'Schedule is required']
    },
    specialDays: [specialDay],
    iconUrl: String
});

module.exports = mongoose.model('Club', clubSchema)