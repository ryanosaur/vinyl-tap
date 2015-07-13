(function() {
  'use strict';

angular.module('VINYLTAP.controller.swap', [])
  .controller('SwapController', function($scope, $state, User, Album, Swap) {
    (function(){
      $scope.activeUser = User.activeUser;
    })();
    $scope.swapAlbums = function(index){
      //owner update
      var newOwnerAlbum = $scope.albums[index];
      newOwnerAlbum.username = $scope.swap.owner;
      newOwnerAlbum.state = "done";
      Album.updateAlbum($scope.swap.requester, newOwnerAlbum._id, newOwnerAlbum)
      .success(function(album){
        //requester update
        var newRequesterAlbum = $scope.swap.owner_album;
        newRequesterAlbum.username = $scope.swap.requester;
        newRequesterAlbum.state = "done";
        Album.updateAlbum($scope.swap.owner, newRequesterAlbum._id, newRequesterAlbum )
        .success(function(album){
          //update swap state
          $scope.swap.state = "done";
          Swap.updateSwap($scope.swap._id, $scope.swap)
          .success(function(swap){
            $scope.$apply();
            $state.reload();
          })
          .catch(function(error){
            console.log(error);
          });
        })
        .catch(function(error){
          console.log(error);
        }); //end requester update
      })
      .catch(function(error){
        console.log(error);
      }); //end owner update
    }
    $scope.$on('activeSwap', function(event, activeSwap){
      console.log($scope.swap);
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
