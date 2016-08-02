'use strict';
app.controller("AlbumController", ['$scope', 'AlbumServices', '$stateParams',
    function($scope, AlbumServices, $stateParams) {
        /*current user id is fetched from URL parameter*/
        $scope.currentUserId = angular.copy($stateParams.userId, '');
        /*current user name is fetched from URL parameter*/
        $scope.currentUserName = angular.copy($stateParams.userName, '');
        $scope.currUserAlbumArr = [];


        /*function that fetches albums of an user is via AJAX call*/
        function getAlbumForUserId(userId) {
            var url = AlbumServices.AlbumConstants.URL.GET_ALBUMS_FOR_USER + userId;
            var promise = AlbumServices.httpGET(url, {});
            promise.then(function(data) {
                var response = data;
                $scope.currUserAlbumArr = response.data;
            }, function(data) {

            });

        }

        function init(){
            getAlbumForUserId($scope.currentUserId);
        }

        init();
        

    }
]);