const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var user = require('../../models/usermodel.js');
var User = mongoose.model('User');

/* GET api listing. */
// all routes at api/route name

router.get('/', (req, res) => {
  res.send('api works');
  });

router.get('/allusers', (req, res) => {
  User.find({}).exec(function(err,collection){
    res.send(collection);
  });
});


router.get('/add-book', (req, res) => {    //John will be test user
  User.findOne({'name': 'John'}).exec(function(err, user){
    if(user.books.length <= 0){
      user.books = [{"title": "Slaughterhouse-Five", "authoer": "Kurt Vonneget"}];
    }
    res.send(user);
  });
});

router.post('/add-to-my-books', (req, res) => {    //John will be test user
  let user = req.body.userName;
  let newBook = {
    id: req.body.bookId,
    bookTitle: req.body.bookTitle,
    bookAuthors: req.body.bookAuthors,
    bookImages: req.body.bookImages,
    bookDescription: req.body.bookDescription
  }
  User.findOne({'name': user}).exec(function(err, user){
    user.books.push(newBook);
    res.send(user + " OK ADDED BOOK");
  });
});




module.exports = router;