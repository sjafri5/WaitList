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
    			console.log(response);
					for (var i = 0; i < response.length ; i++) {
						var each_party = response[i].party

						var partyObject = {
							name: each_party.name,
							size: each_party.party_count,
							phone: each_party.phone
						}

						$scope.parties.push(partyObject)
					}    			
    		};

    		$scope.partiesFailed = function(response){
    			console.log("err");
    		};

    		$scope.addParty = function(){
    			$http.post('/api/parties', $scope.formData).success($scope.partyAdded)
    			// PartyService.addAnotherParty({'hi': 'fee'})
	      //   	.success($scope.partyAdded)
    			// $scope.parties.push($scope.formData);
    		};

    		$scope.partyAdded = function(response){
    			console.log("succesfully added");
    		};


        $scope.init();
    });