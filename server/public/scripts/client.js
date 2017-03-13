var HeroApp = angular.module('HeroApp', ['ngRoute']);

HeroApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/heroList', {
      templateUrl: '/views/hero-list.html',
      controller: 'HeroListController',
      controllerAs: 'hlc'
    }).when('/powersList', {
      templateUrl: '/views/powers-list.html',
      controller: 'PowersListController',
      controllerAs: 'plc'
    })
    .otherwise({
      redirectTo: 'heroList'
    })
}]);
