var Book = require("./models/book");

var book = new Book({name: "book1", description: "Very interesting book", test: 5, authors: [{name: "Author 1", test: 4}]});
book.save();

