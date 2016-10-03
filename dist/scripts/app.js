(function() {
     function config($stateProvider, $urlRouterProvider) {
     
     $urlRouterProvider.otherwise('/');
         
     $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
        })
     }
        
    angular
         .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
         .config(config);
 })();