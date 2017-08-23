const express = require('express');
const Book = require('../models/book');
const router = express.Router();


router.get('/', function(req, res) {

    Book.create({
        title: "Little Women",
        author: "Louisa May Alcott",
        pageCount: 472,

        publishing: [
            {
                year: 1868,
                publisher: "Roberts Brothers",
                city:'Boston'
            },

        ],
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

  // console.log(book.toObject());
  res.render('listing')
})



module.exports = router
