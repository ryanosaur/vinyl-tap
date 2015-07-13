(function() {
  'use strict';

  angular.module('VINYLTAP.model.album', [])
  .service('Album', function($http){
    this.addRecord = function(username, record){
      return $http.post('/users/' + username + '/albums', record);
    }
    this.getAlbums = function(){
      return $http.get('/albums');
    }
    this.getAlbumsForUser = function(username){
      return $http.get('/users/' + username + '/albums');
    }
    this.updateAlbum = function(username, id){
      return $http.patch('/users/' + username + '/albums/' + id);
    }
    this.deleteAlbum = function(username, id){
      return $http.delete('/users/' + username + '/albums/' + id);
    }
  });
})();
