(function() {
  'use strict';

  angular.module('VINYLTAP.controller.login', [])
  .controller('LoginController', function($scope, $state, User) {
    $scope.login = function(){
      User.loginUser($scope.newUser)
      .success(function(data){
        User.setActiveUser(data.user);
        $state.go('services');
      })
      .catch(function(error){
        var errorMessage = error.data.error.message;
        $scope.error = errorMessage;
      })
    }
    $scope.register = function(){
      User.registerUser($scope.newUser)
      .success(function(data){
        User.activeUser(data.user);
        $state.go('services');
      })
      .catch(function(error){
        var errorMessage = error.data.error.message;
        $scope.error = errorMessage;
      })
    }
  });
})();
