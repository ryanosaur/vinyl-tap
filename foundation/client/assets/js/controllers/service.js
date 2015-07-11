(function() {
  angular.module('hmo.controller.service', [])
  .controller('ServiceController', function($scope, Service) {
    Service.getAllServices()
    .success(function(data) {
      $scope.services = data;
    }).catch(function(error) {
      console.log(error);
    });
  });
})();
