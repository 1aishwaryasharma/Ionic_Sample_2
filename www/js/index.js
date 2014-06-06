angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope, $ionicPopup) {
  $scope.myTitle = 'Template';
  
  $scope.doSomething = function() {
    var passwordPopUp = $ionicPopup.prompt({
				title: '<div class="popupEllipsis">Sign In to </div>',
				subTitle: '<div class="popupEllipsis subTitleLineHeight">Enter password for server </div>',
				inputType: 'password',
				inputPlaceholder: 'Password'
			});
			passwordPopUp.then(function(res) {
				if(res) {
					//$scope.loginOKHandler(res);
				}
			});;
  };
});