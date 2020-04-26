const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookModel = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('books', bookModel)