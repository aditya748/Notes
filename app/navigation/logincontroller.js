(function(){
angular.module('Social')
.controller('logincontroller',['$scope','$http','$state',function($scope,$http,$state)
{
	
	$scope.loginuse=function(){
			console.log("inside...sdsdsd");
			var request={
				email:$scope.email,
				password:$scope.password
			}
		$http.post('api/user/login',request).success(function(data){
			localStorage.setItem('UserData',JSON.stringify(data[0]));
			console.log(localStorage['UserData']);
			$state.go('main')
		}).error(function(data){
			alert(data);
		});
	}

	}])
}());