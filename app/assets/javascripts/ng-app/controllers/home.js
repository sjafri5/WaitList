angular.module('AngularRails')
    .controller('HomeCtrl', [ '$scope', '$http', 'PartyService', function ($scope, $http, PartyService) {
    		
    		$scope.init = function(){
	        $scope.partyCount = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
	        $scope.parties = [];

	        PartyService.fetchParties()
	        	.success($scope.partiesReceived)
	        		.error($scope.partiesFailed)

    			
    		};

    		$scope.partiesReceived = function(response){
					for (var i = 0; i < response.length ; i++) {
						var each_party = response[i].party

						var partyObject = {
							id: each_party.id,
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
    			// $http.post('/api/parties', $scope.formData).success($scope.partyAdded)
    			PartyService.addAnotherParty($scope.formData)
	        	.success($scope.partyAdded)
    			// $scope.parties.push($scope.formData);
    		};

    		$scope.partyAdded = function(response){
    			$scope.parties.push($scope.formData)
    			$scope.formData = {};

    		};

    		$scope.deleteAllParties = function(){
    			PartyService.deleteAllParties().success($scope.allPartiesDeleted)
    		};

    		$scope.allPartiesDeleted = function(response){
    			$scope.parties = [];
    		};

    		$scope.deleteParty = function(index){
    			console.log();
    			$scope.deleteIndex = index;
    			var partyId = $scope.parties[index].id
    			PartyService.deleteParty(partyId).success($scope.partyDeleted)
    		};

    		$scope.partyDeleted = function(response){
    			$scope.parties.splice($scope.deleteIndex, 1)
    		};

            $scope.sendText = function(index){
                $scope.smsIndex = index;
                var partyId = $scope.parties[index].id
                PartyService.sendText(partyId).success($scope.textSuccessful)                
            };

            $scope.textSuccessful = function(response){
                console.log("made it to text");
            };


        $scope.init();
    }]);