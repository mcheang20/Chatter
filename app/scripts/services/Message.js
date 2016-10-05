(function() {
  function Message($firebaseArray, $cookies, Room) {
    var ref = firebase.database().ref().child("messages");
    
    var messages = $firebaseArray(ref);
      
    var currentUser = $cookies.get('blocChatCurrentUser');
    var setRoom = Room;
      
      
    return {
      send: function(newMessage) {
        messages.$add({ content: newMessage,  username: currentUser, roomId: setRoom.currentRoom.$id, sentAt: '' }).then( function(ref) {
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