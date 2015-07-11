(function() {
  angular.module('hmo.model.service', [])
  .service('Service', function($http){
    this.getAllServices = function() {
      return $http.get('/services');
    };
    this.postService = function(service){
      return $http.post('/services', service);
    };
  });
})();
