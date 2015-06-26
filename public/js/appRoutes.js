angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

        // nerds page that will use the NerdController
        .when('/test', {
            templateUrl: 'views/angulartest/content.html',
            controller: 'TestController'
        });

    $locationProvider.html5Mode(true);

}]);