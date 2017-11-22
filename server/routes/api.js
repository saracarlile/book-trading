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

router.get('/all-books', (req, res) => {
  User.find({}).exec(function (err, collection) {
    res.send(collection);
  });
});

router.post('/my-books', (req, res) => {
  let id = req.body.fbId;
  User.find({ 'fbId': id }).exec(function (err, collection) {  // John will be test user
    res.send(collection);
  });
});


router.post('/add-book', (req, res) => {    //get list of user books for add book function to ensure book isn't added to library twice 
  let id = req.body.fbId;
  User.findOne({ 'fbId': id }).exec(function (err, user) {
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
  User.findOneAndUpdate({ 'name': user }, { $push: { 'books': newBook } }).exec(function (err, result) {
    res.send(result + " OK ADDED BOOK");
  });
});

router.post('/delete-from-my-books', (req, res) => {    //John will be test user
  let user = req.body.userName;

  User.update({ 'name': user }, { '$pull': { 'books': { 'id': req.body.bookId } } }, { safe: true, multi: true }).exec(function (err, result) {
    res.send(result + " OK BOOK REMOVED");
  });

});

router.post('/get-user', (req, res) => {    //get user info for My Profile page
  let id = req.body.fbId;
  User.findOne({ 'fbId': id }).exec(function (err, user) {
    res.send(user);
  });
});


router.post('/check-trade', (req, res) => {

  let tradeRequest = {
    id: req.body.bookId, //book id
    bookTitle: req.body.bookTitle,
    bookAuthors: req.body.bookAuthors,
    bookImages: req.body.bookImages,
    bookDescription: req.body.bookDescription,
    bookOwner: req.body.bookOwner,
    tradeRequester: req.body.tradeRequester,
    fbId: req.body.fbId,
    tradeApproved: false
  }


  User.find({ 'fbId': tradeRequest.fbId }).exec(function (err, result) {
    res.send(result);
  });



});


router.post('/request-trade', (req, res) => {


  let tradeRequest = {
    id: req.body.bookId,
    bookTitle: req.body.bookTitle,
    bookAuthors: req.body.bookAuthors,
    bookImages: req.body.bookImages,
    bookDescription: req.body.bookDescription,
    bookOwner: req.body.bookOwner,
    tradeRequester: req.body.tradeRequester,
    fbId: req.body.fbId,
    tradeApproved: false,
    tradePending: true
  }



  User.findOneAndUpdate({ 'fbId': tradeRequest.fbId }, { $push: { 'tradesRequested': tradeRequest } }).exec(function (err, result) {
    console.log(" OK TRADE Requested");
  });

  User.findOneAndUpdate({ 'name': tradeRequest.bookOwner }, { $push: { 'tradeRequests': tradeRequest } }).exec(function (err, result) {
    res.send("ok");
  });

});



router.post('/delete-trade', (req, res) => {


  let tradeRequest = {
    id: req.body.id,  //bookId
    bookTitle: req.body.bookTitle,
    bookOwner: req.body.bookOwner,
    tradeRequester: req.body.tradeRequester
  }


  User.update({ 'name': req.body.bookOwner }, { '$pull': { 'tradeRequests': { 'id': req.body.id } } }, { safe: true, multi: true }).exec(function (err, result) {
    console.log("tradeRequest removed");
  });

  User.update({ 'name': req.body.tradeRequester }, { '$pull': { 'tradesRequested': { 'id': req.body.id } } }, { safe: true, multi: true }).exec(function (err, result) {
    console.log("tradesRequested removed");
  });
});

router.post('/reject-trade', (req, res) => {


  let tradeRequest = {
    id: req.body.id,  //bookId
    bookTitle: req.body.bookTitle,
    bookAuthors: req.body.bookAuthors,
    bookImages: req.body.bookImages,
    bookDescription: req.body.bookDescription,
    bookOwner: req.body.bookOwner,
    tradeRequester: req.body.tradeRequester,
    bookImages: req.body.bookImages,
    tradeApproved: false,
    tradePending: false
  }


  User.update({ 'name': req.body.bookOwner }, { '$pull': { 'tradeRequests': { 'id': req.body.id } } }, { safe: true, multi: true }).exec(function (err, result) {
    console.log(" OK TRADE Rejected");
    if (result) {
      User.findOneAndUpdate({ 'name': req.body.bookOwner }, { '$push': { 'tradeRequests': tradeRequest } }).exec(function (err, result) {
        console.log(" OK TRADE added");
      });
    }
  });

  User.update({ 'name': req.body.tradeRequester }, { '$pull': { 'tradesRequested': { 'id': req.body.id } } }, { safe: true, multi: true }).exec(function (err, result) {
    if (result) {
      User.findOneAndUpdate({ 'name': req.body.tradeRequester }, { '$push': { 'tradesRequested': tradeRequest } }).exec(function (err, result) {
        res.send("ok " + result);
      });
    }
  });

});



router.post('/update-user-info', (req, res) => {    //John will be test user
  let id = req.body.fbId;
  let userInfo = {
    name: req.body.name,
    fbId: req.body.fbId,
    city: req.body.city,
    state: req.body.state
  }
  User.findOneAndUpdate({ 'fbId': id }, { '$set': { 'state': userInfo.state, 'city': userInfo.city } }).exec(function (err, result) {
    res.send(result + " OK UPDATED USER INFO");
  });
});

router.post('/user-login', (req, res) => {    //login to booktraders
  let id = req.body.fbId;

  let userInfo = {
    name: req.body.name,
    fbId: req.body.fbId,
    photoUrl: req.body.photoUrl,
    city: null,
    state: null
  }

  User.findOne({ 'fbId': id }).exec(function (err, user) {
    if (!user) { // this code is added for testing ... users need to be created upon login
      let person = new User({
        name: userInfo.name,
        fbId: userInfo.fbId,
        photoUrl: userInfo.photoUrl,
        city: null,
        state: null
      });
      person.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('saved');
        }
      });
    }
    if (user) {
      res.send(user);
    }
  });

});






module.exports = router;