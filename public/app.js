var app = angular.module("AirBNB", ["ngRoute","ngCookies", "ngAnimate"]);

app.config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: '/views/main.html',
    controller: 'MainController'
    })
    .when('/main', {
      templateUrl: '/views/main.html',
      controller: 'MainController'
    })

});
