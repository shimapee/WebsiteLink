angular.module('jsondata', [])
	.controller('getjsoncontroller', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){
		var $url = "res/link.json";
		$timeout(function(){
			$http({
				method: "GET",
				url: $url
			})
			.success(function(data, status, headers, config){
				$scope.results = data;
				$scope.isObject = function(obj) {
					if(!obj || obj == "") {
						return false;
					} else {
						return true;
					}
				}
			})
			.error(function(data, status, headers, config){
				console.log("Error!---"+status);
			});
		});
	}]);