(function() {
     function config($stateProvider, $urlRouterProvider) {
     
     $urlRouterProvider.otherwise('/home');
         
     $stateProvider
        .state('home', {
            url: '/home',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
        });
     }
        
    angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);
 })();