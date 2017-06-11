var controllers = angular.module('myApp');
controllers.value('Server', 'https://thawing-reaches-59054.herokuapp.com')

controllers.factory('API', ['$http', '$timeout', 'Server', function ($http, $timeout, Server) {
    var API = {};
    var loadTime = 1000;
    
    API.getEvents = function () {
        return $http.get(Server + '/api/events')
    };

    return API;
}])