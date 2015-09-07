/**
 * Created by hongboing on 9/7/15.
 */
angular
    .module('myApp.services', [])
    .factory('githubService', githubService);


function githubService($http){
    var githubUrl = 'https//api.github.com';

    var runUserRequest = function (username, path) {
        return $http({
            method:'JSONP',
            url:githubUrl + '/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
        });
    };

    return {
        events : function(username){
            return runUserRequest(username, 'events');
        }
    };
}