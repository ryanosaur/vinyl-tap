(function() {
  'use strict';

  angular.module('VINYLTAP.model.user', [])
  .service('User', function($http){
    this.registerUser = function(user){
      return $http.post('/signup', user);
    }
    this.loginUser = function(user){
      return $http.post('/login', user);
    }
    this.setActiveUser = function(user){
      this.activeUser = user;
    }
    this.getActiveUser = function(){
      return this.activeUser;
    }
  });
})();
