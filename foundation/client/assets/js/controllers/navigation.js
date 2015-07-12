(function(){
  'use strict';

  angular.module('VINYLTAP.controller.navigation', [])
    .controller('NavController', function($scope, $state, User) {
      (function(){
        $scope.activeUser = User.activeUser;
        console.log($scope.activeUser);
      })();
    });
})();
