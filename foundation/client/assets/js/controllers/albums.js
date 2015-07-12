(function(){
  'use strict';

  angular.module('VINYLTAP.controller.albums', [])
    .controller('AlbumController', function($scope, $state, User) {
      (function(){
        $scope.users = [
          { username: 'Ryano',
            inventory: [{
              artist: 'The New Pornographers',
              album: 'Together',
              year: 2010,
              genre: 'Indie Rock',
              image_url: 'https://lh3.ggpht.com/yhBTB8ulfXvaSHu_lLRIwD57JDzuZJujEMv8ohFuxNELulOuJx83gvnVuwY0HWxJwam6CMrVsQ=s512-c-e100-nu',
              state: 'active'
            },{
              artist: 'Taylor Swift',
              album: '1989',
              year: 2014,
              genre: 'Pop',
              image_url: 'https://lh6.ggpht.com/QGBBcmLuVaqX6zTtAw23MGRG7UzGpdeowR2xBE0wd-SfZdNJvwXj6k27Jbs=s512-c-e100-nu',
              state: 'active'
            },{
              artist: 'Transplants',
              album: 'Transplants',
              year: 2002,
              genre: 'Punk',
              image_url: 'https://lh3.googleusercontent.com/ZD8zhiHdnTDaLgPuxqYGnsbmohn3EbQdfOPcVuNspHlgBsZBb8NfIoJFdsJgn7GSC4PsaoOhsw=s512-c-e100-nu',
              state: 'active'
            }]
          },{ username: 'Gerald',
            inventory: [{
              artist: 'The Mars Volta',
              album: 'Deloused in the Comatorium',
              year: 2003,
              genre: 'Psychadelic Rock',
              image_url: 'https://lh6.ggpht.com/aiUWqmANEhC4Qaf82b44Is95T1AIVcY6l93EoZuDl1T-yir50oDZjrdQZTT_QqLvfQ9HZjDMvT0=s512-c-e100-nu',
              state: 'active'
            },{
              artist: 'Dave Brubeck',
              album: 'Time In',
              year: 1966,
              genre: 'Jazz',
              image_url: 'https://lh4.ggpht.com/LkxVtKSkg4Uic4ix8WTFB5JGp8yo_eOMhYaX4bPeAVx_2kna9tP9Sun3WyeF=s512-c-e100-nu',
              state: 'active'
            },{
              artist: 'Dr. Dre',
              album: '2001',
              year: 1999,
              genre: 'Hip-Hop',
              image_url: 'https://lh5.ggpht.com/uRdQhz9mF1V2vIU7mDqG9ADtcswj2gDNrCc00wrwGPOL-eihvom-YYwyPgWiqeO76cXjaYZp-w=s512-c-e100-nu',
              state: 'active'
            }]
          }
        ];
      })();

    });
})();
