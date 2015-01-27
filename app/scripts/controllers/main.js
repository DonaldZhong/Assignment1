'use strict';

/**
 * @ngdoc function
 * @name quizappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizappApp
 */
angular.module('quizappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.message = 'Welcome to the quiz app, test your knowledge below';
  });

