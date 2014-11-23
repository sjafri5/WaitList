angular.module('AngularRails').service('PartyService', ['$http', function($http){
   
  this.fetchParties = function(){
    return $http.get('/api/parties');
  };
 
  this.addAnotherParty = function(formData){
    return $http.post('/api/parties', formData);
  };
	
	this.deleteParty = function(id){
		url = '/api/parties/' + id
		return $http.delete(url);
		
	};


}]);