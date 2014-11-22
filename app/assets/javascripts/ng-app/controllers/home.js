angular.module('AngularRails')
    .controller('HomeCtrl', function ($scope, $http, PartyService) {
    		
    		$scope.init = function(){
	        $scope.partyCount = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
	        $scope.parties = [];

	        PartyService.fetchParties()
	        	.success($scope.partiesReceived)
	        		.error($scope.partiesFailed)

    			
    		};

    		$scope.partiesReceived = function(response){
    			console.log(response)
    			
    		};

    		$scope.partiesFailed = function(response){
    			console.log("err");
    		};

    		$scope.addParty = function(){
    			console.log($scope.formData);
    			$scope.parties.push($scope.formData);
    		};


        $scope.init();
    });