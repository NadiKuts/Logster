'use strict';


var controllers = angular.module('myApp.view1', ['ngRoute', 'ngMaterial', 'chart.js']);

controllers.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

controllers.controller('View1Ctrl', ['$scope', 'API', function ($scope, API) {
  API.getPuppies().then(function (data) {
    $scope.pesels = data.data.data;
    console.log($scope.pesels);
  });
  
  $scope.labels = ["5.June", "6.June", "7.June", "8.June", "9.June", "10.June", "11.June"];
  
  $scope.colors = [{
        backgroundColor : '#FFFFFF',
        pointBackgroundColor: '#FFFFFF',
        pointHoverBackgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        pointBorderColor: '#FFFFFF',
        pointHoverBorderColor: '#FFFFFF',
        fill: false /* this option hide background-color */
    }];
  $scope.series = ['Series A'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
  $scope.options = {
    scales: {
      xAxes:[{
        gridLines:{
          color:"rgba(255,255,255,0.3)",
          zeroLineColor:"rgba(255,255,255,0.3)"
        },
        ticks: {
          beginAtZero: true,
          fontColor: '#FFFFFF'
        }
      }],
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            beginAtZero: true,
            fontColor: '#FFFFFF'
          },
          gridLines:{
            color:"rgba(255,255,255,0.3)",
            zeroLineColor:"rgba(255,255,255,0.3)"
          },
          defaultFontColor:'#6d6e71',
        }
      ]
    }
  };
}]);