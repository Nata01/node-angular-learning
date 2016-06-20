angular.module("nodeAngularLearning", ['ngRoute', 'books'])
    
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html'
            })
            .otherwise({
                template: `
                    <h1>Page not found</h1>
                `
            });
    });
