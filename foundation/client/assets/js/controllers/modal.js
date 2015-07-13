(function() {
  'use strict';

angular.module('VINYLTAP.controller.modal', [])
  .controller('ModalController', function($scope, $state, User, Album) {
    $scope.saveEdit = function(){
      Album.updateAlbum($scope.album.username, $scope.album._id, $scope.album).success(function(album){
        $scope.editing = false;
      })
      .catch(function(error){
        console.log(error);
      });
    }
  });
})();
