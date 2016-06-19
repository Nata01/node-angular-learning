angular.module("books")
    .factory("booksService", function ($http) {
        return {
            getBooks: getAll,
            getBookById: getById
        };
        
        function getAll() {
            return $http.get('/api/books')
                .then(_getResponseData);
        }
        
        function getById(id){
            return $http.get('/api/books/'+id)
                .then(_getResponseData);
        }
        

        function _getResponseData(res) {
            return res.data;
        }
    });