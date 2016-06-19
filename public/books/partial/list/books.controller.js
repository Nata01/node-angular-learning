angular.module('books')
    .controller("booksController", function ($scope, booksService) {

        booksService.getBooks()
            .then(function (books) {
                $scope.books = books;
            });
    });