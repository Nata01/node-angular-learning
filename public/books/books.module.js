angular.module('books', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/books', {
                templateUrl: '/books/partial/list/books.html',
                controller: 'booksController'
            })
            .when('/books/:bookId', {
                templateUrl: '/books/partial/view/book.html',
                controller: 'bookController'
            });
    });