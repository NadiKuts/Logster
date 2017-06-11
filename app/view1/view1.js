'use strict';


var controllers = angular.module('myApp.view1', ['ngRoute', 'ngMaterial', 'chart.js']);

controllers.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

controllers.controller('View1Ctrl', ['$scope', '$interval', 'API', function ($scope, $interval, API) {
   var refreshData = function() { 
     API.getEvents().then(function (data) {
       $scope.events = data.data.data;
       console.log($scope.events);
       $scope.labels = [];
       $scope.data = [[]];
       for (var i = 0; i < $scope.events.length; i++) {
         var event = $scope.events[i];
         if ($scope.isSL(event)) {
           $scope.data[0].push(parseInt(event.value, 10));
           $scope.labels.push($scope.toTime(event));
         }
       }
       $scope.events.reverse();
       
     });
   };
  
  var promise = $interval(refreshData, 2000);
  console.log($scope.events);
  


  
  $scope.isSL = function(event) {
    return event.type == 'SL'
  }
  
  $scope.toTime = function(event) {
    var time = event.date.substring(0, 10) + ' ' + event.date.substring(11, 16);
    return time;
  }

  //$scope.labels = ["5.June", "6.June", "7.June", "8.June", "9.June", "10.June", "11.June"];
  
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
  /*$scope.data = [
    [65, 59, 80, 81, 56, 55, 40]
  ];*/
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