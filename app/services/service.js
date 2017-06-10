var controllers = angular.module('myApp');
controllers.value('Server', 'https://desolate-savannah-86378.herokuapp.com')

controllers.factory('API', ['$http', 'Server', function ($http, Server) {
    var API = {};

    API.getPuppies = function () {
        return $http.get(Server + '/api/puppies')
    };

    API.getProfile = function (id) {
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
    };



    return API;
}])