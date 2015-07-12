(function() {
  'use strict';

  angular.module('VINYLTAP.controller.profile', [])
    .controller('ProfileController', function($scope, $state, User) {
      (function(){
        $scope.activeUser = User.activeUser;
      })();
      $scope.addRecord = function(){
        User.addRecord($state.params.username, $scope.record).success(function(data){
          console.log(data);
          $scope.record = {};
        })
        .catch(function(err){
          console.log(err);
        });
      }
    });
})();
