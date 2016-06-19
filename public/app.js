angular.module("nodeAngularLearning", ['ngRoute', 'books'])
    
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/main.html'
            });
            // .otherwise({
            //     redirectTo: '/404'
            // });
    });
