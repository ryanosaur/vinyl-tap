(function() {
  'use strict';

  angular.module('VINYLTAP.controller.login', [])
  .controller('LoginController', function($scope, $state, User) {
    $scope.login = function(){
      User.loginUser($scope.newUser)
      .success(function(data){
        User.setActiveUser(data.user);
        $state.go('albums');
      })
      .catch(function(error){
        $scope.error = "There was a problem with your login. Please try again.";
      });
    }
    $scope.register = function(){
      User.registerUser($scope.newUser)
      .success(function(data){
        User.setActiveUser(data.user);
        $state.go('albums');
      })
      .catch(function(error){
        var errorMessage = error.data.error.message;
        $scope.error = "There was a problem with your registration. Please try again.";
      });
    }
  });
})();
