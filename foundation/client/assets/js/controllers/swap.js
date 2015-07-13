(function() {
  'use strict';

angular.module('VINYLTAP.controller.swap', [])
  .controller('SwapController', function($scope, $state, User, Album) {
    (function(){
      $scope.activeUser = User.activeUser;
    })();
    $scope.swapAlbums = function(index){
      //owner update
      var newOwnerAlbum = $scope.albums[index];
      newOwnerAlbum.username = $scope.swap.owner;
      Album.updateAlbum($scope.swap.requester, newOwnerAlbum._id, newOwnerAlbum)
      .success(function(album){
        console.log("owners swap", album);
        //requester update
        var newRequesterAlbum = $scope.swap.owner_album;
        newRequesterAlbum.username = $scope.swap.requester;
        Album.updateAlbum($scope.swap.owner, newRequesterAlbum._id, newRequesterAlbum )
        .success(function(album){
          console.log("requesters swap", album);
          $scope.$apply();
          $state.reload();
        })
        .catch(function(error){
          console.log(error);
        }); //end requester update
      })
      .catch(function(error){
        console.log(error);
      }); //end owner update


      console.log('swap', $scope.swap);
      console.log('clicked', $scope.albums[index]);
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
