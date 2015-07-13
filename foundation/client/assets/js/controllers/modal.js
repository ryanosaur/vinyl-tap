(function() {
  'use strict';

angular.module('VINYLTAP.controller.modal', [])
  .controller('ModalController', function($scope, $state, User) {
    // console.log('controller loaded bro');
    $scope.saveEdit = function(){
      var thing = angular.copy($scope.album);
      delete thing._id;
      delete thing.__proto__;

      console.log('working?', $scope.album);
      User.saveEdit($state.params.username, $scope.album)
      // User.saveEdit($state.params.username, thing, $scope.album._id)
      .success(function(user){
        console.log(user);
        $scope.editing = false;
      })
      .catch(function(err){
        console.log(err);
      });
    }
  });
})();
