(function(){
  'use strict';

  angular.module('VINYLTAP.controller.navigation', [])
    .controller('NavController', function($scope, $state, User) {
      (function(){
        $scope.activeUser = User.activeUser;
      })();
      $scope.logout = function(){
        User.logoutUser()
        .success(function(data){
          User.activeUser = null;
          console.log("success", data);
          $state.go('auth.logout');
        })
        .catch(function(error){
          console.log("error", error);
        });
      }
    });
})();
