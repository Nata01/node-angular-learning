angular.module('books')
    .controller("bookController", function ($scope, booksService, $routeParams) {

        booksService.getBookById($routeParams.bookId)
            .then(function (book) {
                $scope.book = book;
            });
    });