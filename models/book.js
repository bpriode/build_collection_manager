const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema     = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/bookCollection');

const bookSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: String,
    pageCount: Number,
    publishing: [{
        year: { type: Number, default: 1 },
        publisher: { type: String, required:true },
        city: { type: String }
    }]
})


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
