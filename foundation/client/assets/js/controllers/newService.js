(function() {
  angular.module('hmo.controller.newService', [])
  .controller('NewServiceController', function($scope, Service) {
    $scope.postService = function(){
      $scope.newService.userid = 'placeholder';
      console.log($scope.newService);
      Service.postService($scope.newService)
      .success(function(data){
        console.log(data);
      })
      .catch(function(error){
        console.log(data);
      });
      $scope.newService = {};
    }
  });
})();
