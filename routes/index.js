var express = require('express');
var router = express.Router();
var Book = require("../models/book");

router.get('/books', function (req, res) {
    Book.find(function (err, books) {
        res.json(books);
    });
});

router.get('/books/:bookId', function (req, res) {
    var id = req.params.bookId;
    Book.find({_id: id}, function (err, books) {
        res.json(books[0]);
    });
});

router.post('/books', function (req, res) {
    var book = new Book(req.body);
    book.save(function (err, book) {
        res.json(book);
    });

});

module.exports = router;
