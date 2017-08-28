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
  };

    Book.create(newBook)
    .then(function(data){
      res.redirect('/');
        // console.log(data);
    })
    .catch(function(err){
        // console.log(err);
    })
    // res.redirect('/');
  })


router.post('/delete/:id', function(req, res) {

  let id = req.body.deleteBtn;
  // console.log(title);

  Book.deleteOne({_id: id})
  .then(function (data) {
    res.redirect('/')
  })
  .catch(function(err) {
    res.send(err);
  });
});
//
//
router.get('/edit/:id', function(req, res){
  let editId = req.params.id;
  let bookEdit = data.find(function(book) {
    return book.id = editId;
  })
  // Book.find({name: name})
  // .then(function(book){
    res.render('edit', {bookData: bookEdit})
  });

router.post('/edit/:id', function(req, res) {

  let editId = req.params.id;


  Book.update({_id: userEdit}, {
      title: req.body.title,
      author: req.body.author,
      pageCount: req.body.page,
      publishing: {
        year: req.body.year,
        publisher: req.body.publisher,
        city: req.body.city
      }
    }).then(function(data) {
      res.redirect('/');
    })
    .catch(function(err) {
      res.send(err);
    })
})





// router.post('/:id', function (req, res) {
//   let id = req.params.id;
//   res.redirect('/');
// })



module.exports = router
