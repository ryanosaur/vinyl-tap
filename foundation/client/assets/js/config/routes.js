(function(){
  'use strict';

  angular.module('hmo.config.routes', [])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('services', {
      url: '/',
      templateUrl: 'templates/services/list.html',
      controller: 'ServiceController',
      animation: {
        enter: 'fadeIn'
      }
    })
    .state('new', {
      url: '/services/new',
      templateUrl: 'templates/services/new.html',
      controller: 'NewServiceController',
      animation: {
        enter: 'hingeInFromTop'
      }
    })
    ;

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  });
})();
