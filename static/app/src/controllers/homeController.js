angular.module('sadaqahApp')
	.controller('homeController', ['$scope','$rootScope', '$http', 
		function($scope,$rootScope, $http) {
		  $scope.message = 'This is Add new order screen';
	      $scope.person = {name:"remis"};
	      var updateClock = function() {
	        $scope.clock = new Date();
	      };
	      setInterval(function() {
	        updateClock();
	      }, 1000);
	      updateClock();
	      $rootScope.name = "Ari name";
	      $scope.donate = function(){
	      	alert("donate");
	      };

	      $scope.receive = function(){
	      	alert("receive");
	      };
			
		}
	]);
