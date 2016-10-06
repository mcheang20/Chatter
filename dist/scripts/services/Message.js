(function() {
  function Message($firebaseArray, $cookies, Room) {
    var ref = firebase.database().ref().child("messages");
    
    var messages = $firebaseArray(ref);
      
    var setRoom = Room;    
    
    var date = new Date();
    var getTime = date.toLocaleTimeString();
   
    return {
      send: function(newMessage) {
        messages.$add({ content: newMessage,  username: $cookies.get('blocChatCurrentUser'), roomId: setRoom.currentRoom.$id, sentAt: getTime }).then( function(ref) {
          var idx = ref.key;
          messages.$indexFor(idx);
        })
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();