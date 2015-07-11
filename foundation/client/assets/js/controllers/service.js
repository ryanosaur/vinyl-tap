(function() {
  angular.module('hmo.controller.service', [])
  .controller('ServiceController', function($scope, Service) {
    Service.getAllServices()
    .success(function(data) {
      console.log(data);
    }).catch(function(error) {
      console.log(error);
    });
  });
})();

