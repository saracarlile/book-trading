var mongoose = require('mongoose'),
Schema = mongoose.Schema;


var UserSchema = new Schema({
    name: String,
    books: [],
    tradeRequests: [],  
    tradesRequested: [],
    state: String,
    city: String
});


mongoose.model('User', UserSchema);