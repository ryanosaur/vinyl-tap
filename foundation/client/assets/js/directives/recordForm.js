(function() {
  'use strict';

  angular.module('VINYLTAP.directives.recordForm', [])
    .directive('recordForm', function() {
      return {
        restrict: 'E',
        templateUrl: '/templates/directives/recordForm.html'
      };
    });
})();
