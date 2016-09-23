(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    var list = $firebaseArray(ref);
      
    return {
      all: rooms,
      add: function(roomName){
       list.$add({ name: roomName }).then( function(ref) {
           var num = ref.key;
           list.$indexFor(num); // returns location in the array
       })
      },
        
     getMessages: function(roomId){
         ref.child('messages').orderByChild('roomId').equalTo('-KS3j8dHPv17zMHB9swy').on('value', function(snapshot) {
         console.log(snapshot.val(roomId));
         })
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