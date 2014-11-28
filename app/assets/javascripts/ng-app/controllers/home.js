angular.module('AngularRails')
    .controller('HomeCtrl', [ '$scope', '$http', '$timeout', 'PartyService', function ($scope, $http, $timeout, PartyService) {
    		
    		$scope.init = function(){
	        $scope.partyCount = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
	        $scope.parties = [];
            $scope.formVisible = false;
          $scope.alerts = {};

	        PartyService.fetchParties()
	        	.success($scope.partiesReceived)
	       	.error($scope.partiesFailed)

    			
    		};

            $scope.oscillateForm = function(){
                $scope.formVisible = !$scope.formVisible
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

    		$scope.addParty = function(isValid){
          if (isValid) {
      			PartyService.addAnotherParty($scope.formData)
  	        	.success($scope.partyAdded)
          }
          else {
            console.log("problem with your form mah nigga");
          }
    		};

    		$scope.partyAdded = function(response){
                console.log(response.party)

                var partyObject = {
                    id: response.party.id,
                    name: response.party.name,
                    size: response.party.party_count,
                    phone: response.party.phone
                }

    			$scope.parties.push(partyObject)
    			$scope.formData = {};
          $scope.formVisible = false;
          $scope.partyForm.$setPristine();

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
                PartyService.sendText(partyId).success($scope.textSuccessful).error($scope.textFailed) 
                $scope.parties[index].disable = true;  
                $timeout(function(){
                  $scope.parties[index].disable = false;  
              }, 10000);             
            };

            $scope.textSuccessful = function(response){
              $scope.alerts.textSuccesful = true
              $timeout(function(){
                $scope.alerts = {};
              }, 4000);

            };

            $scope.textFailed = function(respn){
               $scope.alerts.textFailed = true
                console.log("IT FAILLLIED");
              $timeout(function(){
                $scope.alerts = {};
              }, 4000);
            };

            $scope.alertsExist = function(){
              var keys = Object.keys($scope.alerts).length
              if (keys == 0) {
                return false
              }
              else {
                return true
              }
            };


        $scope.init();
    }]);