(function() {
  angular.module('hmo.controller.login', [])
  .controller('LoginController', function($scope, User) {
    $scope.login = function(){
      User.loginUser($scope.newUser)
      .success(function(data){
        console.log(data);
      })
      .catch(function(error){
        console.log(error);
      })
    }
    $scope.register = function(){
      User.registerUser($scope.newUser)
      .success(function(data){
        console.log(data);
      })
      .catch(function(error){
        console.log(error);
      })
    }
  });
})();
