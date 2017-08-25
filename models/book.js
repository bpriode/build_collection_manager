const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema     = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/bookCollection');

const bookSchema = new Schema({
    title: { type: String, required: true, unique: true,},
    author: { type: String, required: true},
    pageCount: Number,
    publishing: {
        year: { type: Number },
        publisher: { type: String},
        city: { type: String }
    }
});




const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
