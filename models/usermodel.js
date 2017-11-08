var mongoose = require('mongoose'),
Schema = mongoose.Schema;


var UserSchema = new Schema({
    name: String,
    fbId: String,
    photoUrl: String,
    state: String,
    city: String,
    books: [],
    tradeRequests: [],  
    tradesRequested: []
    
});


mongoose.model('User', UserSchema);