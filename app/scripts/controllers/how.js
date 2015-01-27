'use strict';

/**
 * @ngdoc function
 * @name quizappApp.controller:HowCtrl
 * @description
 * # HowCtrl
 * Controller of the quizappApp
 */
angular.module('quizappApp')
  .controller('HowCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.message = 'this statement is being generated from the how.js file';
  });
