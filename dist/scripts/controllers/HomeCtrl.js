(function() {
     function HomeCtrl(Room, $firebaseAuth) {
        this.roomData = Room;
     }
  
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]);
 })();
