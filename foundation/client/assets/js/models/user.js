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
    this.addRecord = function(username, record){
      return $http.post('/users/' + username + '/albums', record);
    }
    this.getUsers = function(){
      return $http.get('/users');
    }
    this.getUser = function(username){
      return $http.get('/users/' + username);
    }
    this.isMyAccount = function(activeUsername, otherUsername){
      return activeUsername === otherUsername;
    }
    this.saveEdit = function(username, record){
      return $http.patch('/users/' + username + '/albums', record);
    }
    // this.saveEdit = function(username, record, recId){
    //   return $http.patch('/users/' + username + '/albums/' + recId, record);
    // }

  });
})();
