(function(){
  'use strict';

  angular.module('VINYLTAP.controller.albums', [])
    .controller('AlbumController', function($scope, $state, User, Album) {
      (function(){
        Album.getAlbums()
        .success(function(albums){
          $scope.activeUser = User.activeUser;
          $scope.albums = albums;
        })
        .catch(function(error){
          console.log(error);
        });
      })();
      $scope.openPreview = function(index){
        $scope.activeAlbum = $scope.albums[index];
        $scope.isMyAccount = $scope.activeUser.username === $scope.albums[index].username;
      }
    });
})();
