'use strict';
app.controller("ImageController", ['$scope', '$stateParams', '$state', 'AlbumServices',
    function($scope, $stateParams, $state, AlbumServices) {
        /*current album id is fetched from URL parameter*/
        $scope.currentAlbumId = angular.copy($stateParams.albumId, '');
        /*current user id is fetched from URL parameter*/
        $scope.currentUserId = angular.copy($stateParams.userId, '');
        /*current user name is fetched from URL parameter*/
        $scope.currentUserName = angular.copy($stateParams.userName, '');
        /*current album title is fetched from URL parameter*/
        $scope.currentAlbumTitle = angular.copy($stateParams.albumTitle, '');
        $scope.currentImageArr = [];

        /*current active photo in album*/
        $scope.activeIndex = AlbumServices.AlbumConstants.DEFAULT_ALBUM_START_INDEX;

        /*function that fetches photos in an album with album id via AJAX call*/
        function getImagesForAlbum(albumId) {
            var url = AlbumServices.AlbumConstants.URL.GET_PHOTOS_FOR_ALBUM + albumId;
            var promise = AlbumServices.httpGET(url, {});
            promise.then(function(data) {
                var response = data;
                $scope.currentImageArr = response.data;
            }, function(data) {

            });

        }

        /*function that navigates to previous image in image slider*/
        $scope.prevImage = function() {
            if ($scope.activeIndex == AlbumServices.AlbumConstants.DEFAULT_ALBUM_START_INDEX) {
                $scope.activeIndex = ($scope.currentImageArr.length - 1);
            } else {
                $scope.activeIndex = $scope.activeIndex - 1;
            }
        }

        /*function that navigates to next image in image slider*/
        $scope.nextImage = function() {
            if ($scope.activeIndex == ($scope.currentImageArr.length - 1)) {
                $scope.activeIndex = AlbumServices.AlbumConstants.DEFAULT_ALBUM_START_INDEX;
            } else {
                $scope.activeIndex = $scope.activeIndex + 1;
            }
        }

        /*function that sets clicked image as active image in image slider*/
        $scope.setImage = function(index) {
            $scope.activeIndex = index;
        }

        function init() {
            getImagesForAlbum($scope.currentAlbumId);

        }

        init();
    }
]);