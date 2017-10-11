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




module.exports = router;