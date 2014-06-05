angular.module('starter.controllers', [])

.controller('MenuCtrl', function($scope,$location) {
	$scope.logOut = function(){
		$location.url('/firstPage');
	}
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


/**
* This is called as soon as the first page loads
*/
.controller('FirstPageCtrl', function($scope,$location) {
	$scope.loginSuccess = function(){
		$location.url('/menu/playlists');
	}
})

/**
* This is called as soon as the application loads
*/
.controller('mainCtrl', function($scope,$location) {
	$location.url('/firstPage');
})
