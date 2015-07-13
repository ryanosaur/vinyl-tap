(function() {
  'use strict';

  angular.module('VINYLTAP.controller.swaps', [])
    .controller('SwapsController', function($scope, $state, User) {
      (function(){
        $scope.activeUser = User.activeUser;
        User.getUser($state.params.username)
        .success(function(user){
          $scope.userProfile = user;
          if($scope.activeUser.username !== $scope.userProfile.username){
            $state.go('profile', { username: $scope.userProfile.username });
          }
        })
        .catch(function(error){
          console.log(error);
        });
      })();
    });
})();
