(function() {
  function Room($firebaseArray) {

    var ref = firebase.database().ref("rooms");
    var rooms = $firebaseArray(ref);  
    console.log(rooms)
    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();