(function(){
  'use strict';

  angular.module('VINYLTAP.controller.albums', [])
    .controller('AlbumController', function($scope, $state, User) {
      (function(){
        User.getUsers()
        .success(function(users){
          $scope.activeUser = User.activeUser;
          $scope.users = users;
          $scope.albums = [];
          $scope.users.forEach(function(user){
            user.inventory.forEach(function(album){
              album.username = user.username;
              $scope.albums.push(album);
            });
          });
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
