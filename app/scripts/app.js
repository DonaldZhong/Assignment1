'use strict';

/**
 * @ngdoc overview
 * @name quizappApp
 * @description
 * # quizappApp
 *
 * Main module of the application.
 */
angular
  .module('quizappApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/How', {
        templateUrl: 'views/how.html',
        controller: 'HowCtrl'
      })  
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
