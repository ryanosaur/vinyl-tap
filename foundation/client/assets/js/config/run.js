(function(){
  'use strict';

  angular.module('VINYLTAP.config.run', [])
  .run(function(){
    FastClick.attach(document.body);
  });
})();
