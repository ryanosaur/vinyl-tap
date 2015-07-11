(function() {
  angular.module('hmo.model.service', [])
  .service('Service', function($http){
    this.getAllServices = function() {
      return $http.get('/services');
    };
  });
})();
