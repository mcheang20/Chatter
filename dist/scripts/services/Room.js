(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var reference = firebase.database().ref().child("messages");
    var rooms = $firebaseArray(ref);
    var messages = $firebaseArray(reference);
    var list = $firebaseArray(ref);
      
    return {
      all: rooms,
      add: function(roomName){
       list.$add({ name: roomName }).then( function(ref) {
           var num = ref.key;
           list.$indexFor(num); // returns location in the array
       })
      },
        
     getMessages: function($id) {
           var roomIdMessages = reference.orderByChild('roomId').equalTo($id).on("child_added", function(snapshot) {
              console.log(snapshot.val());
              this.currentMessage = snapshot.val();
            });
     },
     
     currentRoom: null,
        set: function(room){
        this.currentRoom = room;
      }
    };
}

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();