(function(){
angular.module('Social')
.controller('notescontroller',['$scope','$http','$state',function($scope,$http,$state)
{		$scope.user=JSON.parse(localStorage['UserData']);
		$scope.val=50;
		$scope.cal=function(){
			$scope.val=50-$scope.content.length;
		}

		$scope.submit=function(){
			var request={
				user:$scope.user._id,
				content:$scope.content,
				priority:$scope.priority
			}
			console.log(request);
			$http.post('app/notes/note',request).success(function(response){
				alert("Your Note has been added successfully!!!")
				console.log(response);
			})
			.error(function(err){
				console.log(err);
			});
		}
		

	}])
}());