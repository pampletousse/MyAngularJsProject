'use strict';
angular.module('myApp', [])
  .controller('MainController', ['$scope', function ($scope) {
    $scope.prenom = 'oui';
    $scope.nom = 'non';
  }]);