(function() {
  'use strict';

angular.module('VINYLTAP.controller.modal', [])
  .controller('ModalController', function($scope, $state, User) {
    console.log('controller loaded bro');
    $scope.saveEdit = function(){
      console.log('working?', $scope.album);
      User.saveEdit($state.params.username, $scope.album)
      .success(function(user){
        $scope.editing = false;
      })
      .catch(function(err){
        console.log(err);
      });
    }
  });
})();
