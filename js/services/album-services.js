app.service('AlbumServices', function($http, $filter) {

    var AlbumConstants = {
        'GET': 'GET',
        'DEFAULT_DATATYPE': 'json',
        'DEFAULT_HEADER': {
            'Content-Type': 'application/json'
        },
        'URL' : {
        	'GET_ALL_USERS' : "https://jsonplaceholder.typicode.com/users",
        	'GET_ALBUMS_FOR_USER' : "http://jsonplaceholder.typicode.com/albums?userId=",
        	'GET_PHOTOS_FOR_ALBUM' :"https://jsonplaceholder.typicode.com/photos?albumId="
		},
		'DEFAULT_ALBUM_START_INDEX' :0
    }

    var httpGET = function(url, params) {
        return $http({
            method: AlbumConstants.GET,
            url: url,
            dataType: AlbumConstants.DEFAULT_DATATYPE,
            params: params,
            headers: AlbumConstants.DEFAULT_HEADER
        });
    }


    var assignUserImage = function(userArr) {
        if (userArr != null) {
            var currUser;
            angular.forEach(userArr, function(value, key) {
                currUser = value;
                var imageUrl = "images/users/user_" + (Math.floor((Math.random() * 7) + 1)) + ".png";
                currUser.profileImgUrl = imageUrl;
            });
        }
        return userArr;
    }

    this.httpGET = httpGET;
    this.assignUserImage = assignUserImage;
    this.AlbumConstants = AlbumConstants;
});