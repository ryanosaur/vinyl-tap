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
    $scope.$on('activeSwap', function(event, activeSwap){
      $scope.swap = activeSwap;
      Album.getAlbumsForUser(activeSwap.requester)
      .success(function(albums){
        $scope.albums = albums;
      })
      .catch(function(error){
        console.log(error);
      });
    });
  });
})();
