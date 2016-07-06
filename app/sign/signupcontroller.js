(function(){
	
	angular.module('Social').controller('SignupController',['$scope','$state','$http',function($scope,$state,$http){
			$scope.createmember=function(){
				console.log($scope.newUser);
				$http.post('api/user/signup',$scope.newUser).success(function(response){

					}).error(function(err){
						alert("not okk");
						});
			}
		}]);
	})();