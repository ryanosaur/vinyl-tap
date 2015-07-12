(function() {
  'use strict';

  angular.module('VINYLTAP.config.routes', [])
    .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('albums', {
          url: '/',
          templateUrl: 'templates/albums/list.html',
          controller: 'AlbumController',
          animation: {
            enter: 'fadeIn'
          }
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'templates/profile/profile.html',
          controller: 'ProfileController',
          animation: {
            enter: 'fadeIn'
          }
        })
        .state('auth', {
          url: '/auth',
          templateUrl: 'templates/auth/auth.html',
          abstract: true
        })
        .state('auth.login', {
          url: '/login',
          templateUrl: 'templates/auth/login.html',
          controller: 'LoginController',
          animation: {
            enter: 'hingeInFromTop'
          }
        })
        .state('auth.register', {
          url: '/register',
          templateUrl: 'templates/auth/register.html',
          controller: 'LoginController',
          animation: {
            enter: 'hingeInFromTop'
          }
        });

      $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
      });

      $locationProvider.hashPrefix('!');
    });
})();
