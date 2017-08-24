const express = require('express');
const Book    = require('../models/book');
const router  = express.Router();


router.get('/', function(req, res) {

  Book.find({})
  .then(function(books) {
    res.render('listing', {bookData: books});
  })
});

router.post('/', function(req, res) {

  let newBook = {
    title: req.body.title,
    author: req.body.author,
    pageCount: req.body.page,
    publishing: {
      year: req.body.year,
      publisher: req.body.publisher,
      city: req.body.city
    }
  }

    Book.create(newBook)
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

    res.redirect('/');
  })





router.post('/delete', function(req, res) {
  let title = req.params.title;

  Book.deleteOne({title: title})
  .then(function (data) {
    console.log(data);
    res.redirect('/')
  })
  .catch(function (err) {
    console.log(err);
  });
});

router.post('/:id', function (req, res) {
  let id = req.params.id;
  res.redirect('/');
})



module.exports = router
