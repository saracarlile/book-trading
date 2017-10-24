const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var user = require('../../models/usermodel.js');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

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

router.get('/my-books', (req, res) => {
  User.find({'name': 'John'}).exec(function(err,collection){  // John will be test user
    res.send(collection);
  });
});


router.get('/add-book', (req, res) => {    //John will be test user
  User.findOne({'name': 'John'}).exec(function(err, user){  
    if(!user) { // this code is added for testing ... users need to be created upon login
      let john = new User({ name: 'John' });
      john.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('saved');
        }
      });
    }  // this code has been added for testing...users need to be created upon login
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
  User.findOneAndUpdate({'name': user}, { $push: { 'books': newBook } }).exec(function(err, result){
    res.send(result + " OK ADDED BOOK");
  });


});




module.exports = router;