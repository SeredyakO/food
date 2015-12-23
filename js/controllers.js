'use strict';

/* Controllers */

var foodApp = angular.module('foodApp', []);

foodApp.controller('foodCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('foods/food.json').success(function(data) {
    $scope.foods = data;
  });

  $scope.orderProp = 'price';
}]);
