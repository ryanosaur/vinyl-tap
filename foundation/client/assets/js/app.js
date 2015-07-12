(function() {
  'use strict';

  angular.module('VINYLTAP', [
    'ui.router',
    'ngAnimate',

    //help-me-out
    'VINYLTAP.config',
    'VINYLTAP.controllers',
    'VINYLTAP.models',
    'VINYLTAP.directives',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ]);
})();
