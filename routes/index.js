var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.json('hello, world!');
});

router.get('/books', function (req, res) {
    res.json([{id: 1, name: "Book 1"}, {id: 2, name:"Book 2"}]);
});

router.get('/books/:bookId', function (req, res) {
    var id = req.params.bookId;
    var book = {
        name: "Book " + id,
        description: "Some book desc",
        authors: [
            {id: 1, name: "Author 1"},
            {id: 2, name: "Author 2"}
        ]
    };

    res.json(book);
});

router.get('/author/:id', function (req, res) {
    res.json({id: req.params.id, name: 'Natashka'});
});

module.exports = router;
