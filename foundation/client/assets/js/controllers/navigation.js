(function(){
  'use strict';

  angular.module('VINYLTAP.controller.navigation', [])
    .controller('NavController', function($scope, $state, User) {
        $scope.isActiveUser = User.activeUser;
        console.log($scope.isActiveUser);
    });
})();
