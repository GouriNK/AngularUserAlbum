'use strict';

var app = angular.module('albumApp', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) { 
    $urlRouterProvider.otherwise('/users');
    $stateProvider
        .state('users', {
            url: '/users',
            templateUrl: 'views/user-list.html',
            controller: 'UserController'
        })
        .state('album-main', {
            url: '/album-main',
            templateUrl: 'views/album-list.html',
            controller: 'AlbumController',
            params: {
                userId: null,
                userName:null
            }
        })
       .state('album-view', {
            url: '/view-album',
            templateUrl: 'views/album-view.html',
            controller: 'ImageController',
            params: {
                albumId: null,
                userId: null,
                albumTitle:null,
                userName:null
            }
       })
       

        
}]);

