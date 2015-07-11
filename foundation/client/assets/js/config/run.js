(function(){
  'use strict';

  angular.module('hmo.config.run', [])
  .run(function(){
    FastClick.attach(document.body);
  });
})();
