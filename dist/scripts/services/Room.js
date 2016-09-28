(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var reference = firebase.database().ref().child("messages");
    var rooms = $firebaseArray(ref);
    var messages = $firebaseArray(reference);
    var list = $firebaseArray(ref);
      
    return {
      all: rooms,
      mess: messages,
      add: function(roomName){
       list.$add({ name: roomName }).then( function(ref) {
           var num = ref.key;
           list.$indexFor(num); // returns location in the array
       })
      },
        
     getMessages: function($id) {
        return $firebaseArray(reference.orderByChild('roomId').equalTo($id));
     },
     
     currentRoom: null,
        set: function(room){
        this.currentRoom = room;
        this.currentMessages = this.getMessages(this.currentRoom.$id);
      }
    };
}

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();