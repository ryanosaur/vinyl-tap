(function() {
  'use strict';

angular.module('VINYLTAP.controller.profile', [])
  .controller('ProfileController', function($scope, $state, User) {
    (function(){
      $scope.activeUser = User.activeUser;
      User.getUser($state.params.username)
      .success(function(user){
        $scope.userProfile = user;
        console.log(user);
        $scope.isMyAccount = User.isMyAccount($scope.activeUser.username,
          $scope.userProfile.username);
      })
      .catch(function(error){
        console.log(error);
      });
    })();
    $scope.addRecord = function(){
      User.addRecord($state.params.username, $scope.record)
      .success(function(user){
        $scope.userProfile = user;
        $scope.record = {};
        $scope.$apply();
        $state.reload();
      })
      .catch(function(err){
        console.log(err);
      });
    }
    $scope.openPreview = function(index){
        $scope.activeAlbum = $scope.userProfile.inventory[index];
    }
  });
})();
