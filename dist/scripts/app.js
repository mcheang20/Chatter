(function() {
     function configs($stateProvider, $urlRouterProvider) {
     
     $urlRouterProvider.otherwise('/home');
         
     $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/templates/home.html'
        });
     }
        
    angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(configs);
 })();