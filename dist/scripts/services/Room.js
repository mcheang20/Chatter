(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref("rooms");
    var rooms = $firebaseArray(ref);
      
    var list = $firebaseArray(ref);
      
    return {
      all: rooms,
      add: function(roomName){
       console.log("Adding Room!");
       list.$add({ name: roomName }).
        then( function(ref) {
           var num = ref.key;
           list.$indexFor(num); // returns location in the array
       });
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();