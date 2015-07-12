(function() {
  'use strict'
  angular.module('hmo.directives.recordForm', [])
    .directive('recordForm', function() {
      return {
        restrict: 'E',
        templateUrl: '/templates/directives/recordForm/recordForm.html'
      };
    });
})();
