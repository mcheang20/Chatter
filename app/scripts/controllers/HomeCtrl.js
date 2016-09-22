(function() {
     function HomeCtrl(Room) {
        this.roomData = Room;
         this.currentRoom =  Room.list.$indexFor(num);
        }
    
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]);
 })();
