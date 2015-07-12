(function(){
  'use strict';

  angular.module('VINYLTAP.controller.albums', [])
    .controller('AlbumController', function($scope, $state, User) {
      (function(){
        $scope.albums = [
          {}
        ];
      })();
    });
})();
