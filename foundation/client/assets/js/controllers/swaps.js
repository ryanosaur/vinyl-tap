(function() {
  'use strict';

  angular.module('VINYLTAP.controller.swaps', [])
    .controller('SwapsController', function($scope, $state, User, Swap) {
      (function(){
        $scope.activeUser = User.activeUser;
        User.getUser($state.params.username)
        .success(function(user){
          $scope.userProfile = user;
          if($scope.activeUser.username !== $scope.userProfile.username){
            $state.go('profile', { username: $scope.userProfile.username });
          }
        })
        .catch(function(error){
          console.log(error);
        });
        Swap.getSwapsFromMe($state.params.username)
        .success(function(outgoing){
          $scope.outgoing = outgoing;
          $scope.activeSwaps = $scope.outgoing;
          console.log($scope.outgoing);
        })
        .catch(function(error){
          console.log(error);
        });
        Swap.getSwapsToMe($state.params.username)
        .success(function(incoming){
          $scope.incoming = incoming;
          console.log($scope.incoming);
        })
        .catch(function(error){
          console.log(error);
        });
      })();
      $scope.getIncoming = function(){
        $scope.activeSwaps = $scope.incoming;
      }
      $scope.getOutgoing = function(){
        $scope.activeSwaps = $scope.outgoing;
      }
    });
})();
