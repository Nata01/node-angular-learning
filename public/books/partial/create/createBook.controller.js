angular.module('books')
    .controller("createBookController", function ($scope, booksService, $location) {
        $scope.book = {authors: []};
        $scope.addAuthor = function () {
            $scope.book.authors.push({name: $scope.authorName});
            $scope.authorName = "";
        };
        $scope.createBook = function (book) {
            booksService.createBook(book)
                .then(function(createdBook){
                    $location.path('/books/'+createdBook._id);
                });
        };
    });
