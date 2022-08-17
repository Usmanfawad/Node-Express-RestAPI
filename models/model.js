const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    address: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)