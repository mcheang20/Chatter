(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref("rooms");
    var rooms = $firebaseArray(ref);
      
    var list = $firebaseArray(ref);
      
    return {
      all: rooms,
      add: function(roomName){
       list.$add({ 
           name: roomName,
           messages: rooms.push()
       }).then( function(ref) {
           var num = ref.key;
           list.$indexFor(num); // returns location in the array
       })
      },
     addMessage: function(){
         var updates = {};
         var newMessageKey = this.currentRoom.push().key;
         updates['/rooms/' + newMessageKey] = { message: "Hello" };
         
         return firebase.database().ref().update(updates);
     }
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