(function() {
  'use strict';

  angular.module('VINYLTAP.directives.navbar', [])
    .directive('navbar', function() {
      return {
        restrict: 'E',
        templateUrl: '/templates/directives/navbar.html'
      };
    });
})();
