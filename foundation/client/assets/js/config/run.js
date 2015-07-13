(function(){
  'use strict';

  angular.module('VINYLTAP.config.run', [])
  .run(function(User){
    User.getActiveUser()
    .success(function(user){
      if(user){
        User.setActiveUser(user);
        console.log(user);
      }
    })
    .catch(function(error){
      console.log(error);
    });
    FastClick.attach(document.body);
  });
})();
