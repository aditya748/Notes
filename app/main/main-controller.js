(function(){
	angular.module('Social')
	.controller('mainController',['$scope','$http','$state','data',function($scope,$http,$state,data){

		$scope.$watch(
		  function() { return data.login; },
		  function(newValue, oldValue) {
		    if(localStorage['UserData']==undefined){
			console.log("inside undefined");
			$state.go('login');
		}
		else{
			$scope.user=JSON.parse(localStorage['UserData']);
			$http.post('app/main/notes',{user:$scope.user._id}).success(function(response){
				$scope.notes=response;
				console.log(response);
			})
			.error(function(err){
				console.log(err);
			});
		}
		  }
		);

		
		var selectednote=[];
		var indexes=[];
		$scope.deletemulti=function(){
			
			$http.post('app/notes/deletemulti',{arr:selectednote}).success(function(response){
				angular.forEach(indexes, function(value) {
					indexes.splice(indexes.indexOf(value),1);
				  $scope.notes.splice(value,1);

				});
			})
			.error(function(err){
				console.log(err);
			});
		}
		$scope.addmulti=function(id,index){
			var pos=selectednote.indexOf(id);
			if(pos>-1){
				selectednote.splice(id,1);
				indexes.splice(index,1)
			}
			else{
				selectednote.push(id);
				indexes.push(index);
			}
			console.log(selectednote);
		}
		$scope.delete=function(id,index){
			
			 $scope.notes.splice(index, 1); 
			 $http.post('app/main/deletenote',{id:id}).success(function(){
			 	console.log("deleteted")
			 })
			 .error(function(err){
			 	console.log(err);
			 })
		}

		$scope.edit=function(id){
			data.id=id;
			$state.go('edit');
			console.log(id);
		}
		
	}])
	.service('data',function(){
	this.id="";
	this.login="false";
});
}());