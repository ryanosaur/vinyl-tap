(function() {
  'use strict';

angular.module('VINYLTAP.controller.modal', [])
  .controller('ModalController', function($scope, $state, User, Album, Swap) {
    (function(){
      $scope.activeUser = User.activeUser;
    })();
    $scope.createSwap = function(){
      Swap.createSwap({
        requester: $scope.activeUser.username,
        owner: $scope.album.username,
        owner_album: $scope.album._id
      });
    }
    $scope.saveEdit = function(){
      Album.updateAlbum($scope.album.username, $scope.album._id, $scope.album).success(function(album){
        $scope.editing = false;
      })
      .catch(function(error){
        console.log(error);
      });
    }
    $scope.deleteAlbum = function(){
      Album.deleteAlbum($scope.album.username, $scope.album._id).success(function(response){
        console.log(response);
        $scope.$apply();
        $state.reload();
      })
      .catch(function(error){
        console.log(error);
      });
    }
  });
})();
