(function() {
     function HomeCtrl(Room, Message) {
        this.roomData = Room;
        this.messageData = Message;
        this.messageName = "New Message";
         
         this.sendMessage = function(messageContent){
             Message.send(messageContent);
         }
       }
    
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
 })();
