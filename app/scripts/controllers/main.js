'use strict';

/**
 * @ngdoc function
 * @name Mudhead.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Mudhead
 */
angular.module('Mudhead')
  .controller('MainCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
