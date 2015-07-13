(function() {
  'use strict';

  angular.module('VINYLTAP.model.swap', [])
  .service('Swap', function($http){
    this.createSwap = function(swap){
      return $http.post('/swaps', swap);
    }
    this.updateSwap = function(id, swap){
      return $http.patch('/swaps/' + id, swap);
    }
    this.getSwapsToMe = function(username){
      return $http.get('/swaps/to/' + username);
    }
    this.getSwapsFromMe = function(username){
      return $http.get('/swaps/from/' + username);
    }
  });
})();
