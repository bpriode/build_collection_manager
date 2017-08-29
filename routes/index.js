const express = require('express');
const Book    = require('../models/book');
const router  = express.Router();

let data = [];


let getData = function (db, callback) {
  let users = db.collection('books');

    User.find({}).toArray().sort({'title': 1}).then(function(books) {
        data = books;
        callback();
    });
};

router.get('/', function(req, res) {

  Book.find({})
  .then(function(books) {
    res.render('listing', {bookData: books});
  })
  .catch(function(err) {
    res.send(err);
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
    })
    .catch(function(err){
      res.send(err);
    })
  });


router.get('/delete/:id', function(req, res) {

  let id = req.params.id;

  Book.deleteOne({_id: id})
  .then(function (data) {
    res.redirect('/')
  })
  .catch(function(err) {
    res.send(err);
  })
});

// router.get('/edit/:id', function(req, res){
//   let editId = req.params.id;
//   let bookEdit = data.find(function(book) {
//     return book.id == editId
//   })
//     res.render('edit', {books: bookEdit})
//     // console.log(books);
//   // })
//   //   .catch(function(err) {
//   //     res.send(err);
//   //   })
//   });

  router.get('/edit/:id' ,function (req, res) {

  Book.find({_id: req.params.id})
  .then(function(books) {
  res.render('edit', {books: books});
})
  .catch(function(err) {
    res.send(err);
  })
});

router.post('/edit/:id', function(req, res) {
  let bookEdit = req.params.id

  Book.update({_id: bookEdit}, {
      title: req.body.title,
      author: req.body.author,
      pageCount: req.body.page || null,
      publishing: {
        year: req.body.year || null,
        publisher: req.body.publisher || null,
        city: req.body.city || null
      }
    }).then(function(book) {
      res.redirect('/');
    })
    .catch(function(err) {
      res.send(err);
    })
})


module.exports = router
