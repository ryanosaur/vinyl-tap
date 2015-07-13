(function() {
  'use strict';

angular.module('VINYLTAP.controller.swap', [])
  .controller('SwapController', function($scope, $state, User, Album) {
    (function(){
      $scope.activeUser = User.activeUser;
    })();
    $scope.selectAlbum = function(){
      console.log('I CHOOSE YOU PIKACHU');
    }
  });
})();
