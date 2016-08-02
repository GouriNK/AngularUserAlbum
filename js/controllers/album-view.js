'use strict';
app.controller("ImageController", ['$scope', '$stateParams', '$state', 'AlbumServices',
    function($scope, $stateParams, $state, AlbumServices) {
        $scope.currentAlbumId = angular.copy($stateParams.albumId, '');
        $scope.currentUserId = angular.copy($stateParams.userId, '');
        $scope.currentUserName = angular.copy($stateParams.userName, '');
        $scope.currentAlbumTitle = angular.copy($stateParams.albumTitle, '');
        $scope.currentImageArr = [];
        $scope.activeIndex = AlbumServices.AlbumConstants.DEFAULT_ALBUM_START_INDEX;

        function getImagesForAlbum(albumId) {
            var url = AlbumServices.AlbumConstants.URL.GET_PHOTOS_FOR_ALBUM + albumId;
            var promise = AlbumServices.httpGET(url, {});
            promise.then(function(data) {
                var response = data;
                $scope.currentImageArr = response.data;
            }, function(data) {

            });

        }
        getImagesForAlbum($scope.currentAlbumId);

        $scope.prevImage = function() {
            if ($scope.activeIndex == AlbumServices.AlbumConstants.DEFAULT_ALBUM_START_INDEX) {
                $scope.activeIndex = ($scope.currentImageArr.length - 1);
            } else {
                $scope.activeIndex = $scope.activeIndex - 1;
            }
        }

        $scope.nextImage = function() {
            if ($scope.activeIndex == ($scope.currentImageArr.length - 1)) {
                $scope.activeIndex = AlbumServices.AlbumConstants.DEFAULT_ALBUM_START_INDEX;
            } else {
                $scope.activeIndex = $scope.activeIndex + 1;
            }
        }

        $scope.setImage = function(index) {
            $scope.activeIndex = index;
        }
    }
]);