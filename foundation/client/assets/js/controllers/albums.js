(function(){
  'use strict';

  angular.module('VINYLTAP.controller.albums', [])
    .controller('AlbumController', function($scope, $state, User) {
      (function(){
        User.getUsers()
        .success(function(users){
          $scope.users = users;
          $scope.albums = [];
          $scope.users.forEach(function(user){
            user.inventory.forEach(function(album){
              $scope.albums.push({ username: user.username, album: album });
            });
          });
        })
        .catch(function(error){
          console.log(error);
        });
      })();
      $scope.openPreview = function(index){
        $scope.activeAlbum = $scope.albums[index];
      }
    });
})();
