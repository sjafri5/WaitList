angular.module('AngularRails').service('PartyService', ['$http', function($http){
   
  this.fetchParties = function(){
  	console.log('here')
    return $http.get('/api/parties');
    console.log('here')
  };

}]);