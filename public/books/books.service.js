angular.module("books")
    .factory("booksService", function ($http) {
        return {
            getBooks: getBooks,
            getBookById: getBookById,
            createBook: createBook
        };
        
        function getBooks() {
            return $http.get('/api/books')
                .then(_getResponseData);
        }
        
        function getBookById(id){
            return $http.get('/api/books/'+id)
                .then(_getResponseData);
        }

        function createBook(book) {
            return $http.post('/api/books', book)
                .then(_getResponseData);
        }


        function _getResponseData(res) {
            return res.data;
        }
    });