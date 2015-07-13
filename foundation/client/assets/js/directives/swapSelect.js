(function() {
  'use strict';

  angular.module('VINYLTAP.directives.swapSelect', [])
    .directive('swapSelect', function() {
      return {
        restrict: 'E',
        templateUrl: '/templates/directives/swapSelect.html'
      };
    });
})();
