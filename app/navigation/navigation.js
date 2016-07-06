(function(){
angular.module('Social')
.controller('navigation',['$scope','$http','$state','data',function($scope,$http,$state,data)
{
		if(localStorage['UserData']){
			$scope.loggedIn=true;
		}
		else{
			$scope.loggedIn=false;
		}
		$scope.loginuse=function(){
			console.log("inside...sdsdsd");
		$http.post('api/user/login',$scope.login).success(function(data){
			localStorage.setItem('UserData',JSON.stringify(data[0]));
			$scope.loggedIn=true;
			data.login=true;
			$state.go('main');
		}).error(function(data){
			alert(data);
		});
	}
	$scope.logout=function(){
		localStorage.clear();
		$scope.loggedIn=false;
		$state.go('login');
	}
	}])
}());