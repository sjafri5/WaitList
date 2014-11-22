angular.module('AngularRails')
    .controller('HomeCtrl', function ($scope) {
    		$scope.init = function(){
	        $scope.partyCount = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
	        console.log($scope.partyCount);
    			
    		};


        $scope.init();
    });