'use strict';

/**
 * @ngdoc function
 * @name quizappApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the quizappApp
 */
angular.module('quizappApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.message = 'Donald Zhong - 301167293 - Donaldz@sfu.ca';
    $scope.message2 = 'Delaram Fathi';
  });
