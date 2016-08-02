'use strict';
app.controller("AlbumController", ['$scope', 'AlbumServices', '$stateParams',
    function($scope, AlbumServices, $stateParams) {
        $scope.currentUserId = angular.copy($stateParams.userId, '');
        $scope.currentUserName = angular.copy($stateParams.userName, '');
        $scope.currUserAlbumArr = [];

        function getAlbumForUserId(userId) {
            var url = AlbumServices.AlbumConstants.URL.GET_ALBUMS_FOR_USER + userId;
            var promise = AlbumServices.httpGET(url, {});
            promise.then(function(data) {
                var response = data;
                $scope.currUserAlbumArr = response.data;
            }, function(data) {

            });

        }
        getAlbumForUserId($scope.currentUserId);

    }
]);