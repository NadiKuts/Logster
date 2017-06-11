'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngMaterial',
  'chart.js'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.controller('AppCtrl', function($scope, $mdDialog) {
  
  $scope.user = {
    name: "Kate",
    email: "nadikutsenko@gmail.com"
  };
  $scope.doctor = {
    name: "Dr.Smith",
    email: "dr.smith@gmail.com"
  };
  $scope.family = {
    name: "Mom",
    email: "mummy@gmail.com"
  };
  
  $scope.textDialog = function($event) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'testDialog.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose:true
      })
      .then(function() {
        console.log('it closed');
      });
    };
    $scope.changeTab = function() {
      $location.url('/view2');
    }
});

function DialogController($scope, $mdDialog) {
  $scope.close = function() {
    $mdDialog.cancel();
  };
};