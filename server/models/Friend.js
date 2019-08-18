const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const frequentSchema = new Schema(
    {
        idAsker: {
            type: String,
            required: [true, 'idAsker is required']
        },
        idReceiver: {
            type: String,
            required: [true, 'idReceiver is required']
        },
        state: {
            type: String,
            required: [true, 'State is required']
        }
    },
    {timestamps: {createdAt: 'created_at'}}
);

module.exports = mongoose.model('Friend', frequentSchema)