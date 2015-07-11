(function() {
  'use strict';

  angular.module('hmo', [
    'ui.router',
    'ngAnimate',

    //help-me-out
    'hmo.config',
    'hmo.controllers',
    'hmo.models',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ]);
})();
