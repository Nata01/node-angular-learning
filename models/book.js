var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/library');

mongoose.connection.once('open', function() {
    console.log("connected");
});

var bookSchema = mongoose.Schema({
    name: String,
    description: String,
    authors: [{name: String}]
});

module.exports = mongoose.model('Book', bookSchema);