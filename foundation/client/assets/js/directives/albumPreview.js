(function() {
  'use strict';

  angular.module('VINYLTAP.directives.albumPreview', [])
    .directive('albumPreview', function() {
      return {
        restrict: 'E',
        scope: {
          album: '=',
          active: '='
        },
        templateUrl: '/templates/directives/albumPreview.html',
        link: function(scope, element, attrs){}
      };
    });
})();
