(function() {
  'use strict';

  angular.module('VINYLTAP.directives.albumPreview', [])
    .directive('albumPreview', function() {
      return {
        restrict: 'E',
        scope: {
          album: '='
        },
        templateUrl: '/templates/directives/albumPreview.html',
        link: function(scope, element, attrs){
          console.log('album: ', scope.album);
        }
      };
    });
})();
