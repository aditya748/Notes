(function(){
angular.module('Social')
.controller('editcontroller',['$scope','$http','$state','data',function($scope,$http,$state,data)
{		
		$http.post('app/notes/noteinfo',{id:data.id}).success(function(response){

			$scope.content=response[0].content;
			$scope.priority=response[0].priority;
		})
		.error(function(err){
			console.log(err);
		});

		$scope.val=50;
		$scope.cal=function(){
			$scope.val=50-$scope.content.length;
		}

		$scope.submit=function(){
			var request={
				id:data.id,
				//user:$scope.user._id,
				content:$scope.content,
				priority:$scope.priority
			}
			console.log(request);
			$http.post('app/notes/updatenote',request).success(function(response){
				console.log(response);
			})
			.error(function(err){
				console.log(err);
			});
		}
		

	}])

}());