angular.module('AngularRails').service('PartyService', ['$http', function($http){
   
  this.fetchParties = function(){
    return $http.get('/api/parties');
  };
 
  this.addAnotherParty = function(formData){
  	console.log("got here");
    return $http.post('/api/parties', formData);
  };


}]);