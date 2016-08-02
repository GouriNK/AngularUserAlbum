'use strict';
app.controller("UserController", ['$scope', '$http', 'AlbumServices',
    function($scope, $http, AlbumServices) {
        

        function getAllUsers() {
            var url = AlbumServices.AlbumConstants.URL.GET_ALL_USERS;
            var promise = AlbumServices.httpGET(url, {});
            promise.then(function(data) {
                var response = data;
                var userArr = response.data;
                $scope.userList = AlbumServices.assignUserImage(userArr);
            }, function(data) {});

        }

        getAllUsers();
    }
]);