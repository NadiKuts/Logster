var controllers = angular.module('myApp');
controllers.value('Server', 'https://thawing-reaches-59054.herokuapp.com')

controllers.factory('API', ['$http', '$timeout', 'Server', function ($http, $timeout, Server) {
    var API = {};
    var loadTime = 1000;
    
    API.getEvents = function () {
        return $http.get(Server + '/api/events')
    };
    
    
    /*API.getProfile = function (id) {
        return $http.get(Server + '/' + id);
    };

    API.insertProfile = function (report) {
        return $http.post(Server, report);
    };

    API.updateProfile = function (id, report) {
        return $http.put(Server + '/' + id, report)
    };

    API.deleteProfile = function (id) {
        return $http.delete(Server + '/' + id);
    };*/

    return API;
}])