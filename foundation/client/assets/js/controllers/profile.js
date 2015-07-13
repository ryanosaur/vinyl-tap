(function() {
  'use strict';

angular.module('VINYLTAP.controller.profile', [])
  .controller('ProfileController', function($scope, $state, User, Album) {
    (function(){
      $scope.activeUser = User.activeUser;
      User.getUser($state.params.username)
      .success(function(user){
        $scope.userProfile = user;
        $scope.isMyAccount = User.isMyAccount($scope.activeUser.username,
          $scope.userProfile.username);
      })
      .catch(function(error){
        console.log(error);
      });
      Album.getAlbumsForUser($state.params.username)
      .success(function(albums){
        $scope.albums = albums;
      })
      .catch(function(error){
        console.log(error);
      });
    })();
    $scope.addRecord = function(){
      Album.addRecord($scope.activeUser.username, $scope.record)
      .success(function(album){
        $scope.albums.unshift(album);
        $scope.record = {};
        $scope.$apply();
        $state.reload();
      })
      .catch(function(error){
        console.log(error);
      });
    }
    $scope.saveEdit = function(){
      console.log('working?');
      User.saveEdit($state.params.username, $scope.album)
      .success(function(user){
        $scope.userProfile = user;
        $scope.editing = false;
        $scope.$apply();
        $state.reload();
      })
      .catch(function(err){
        console.log(err);
      });
    }
    $scope.openPreview = function(index){
      $scope.activeAlbum = $scope.albums[index];
    }
  });
})();
