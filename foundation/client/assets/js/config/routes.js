(function(){
  'use strict';

  angular.module('hmo.config.routes', [])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/listServices.html',
      controller: 'ServiceController'
    });

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  });
})();
