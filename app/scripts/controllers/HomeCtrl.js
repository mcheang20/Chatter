(function() {
     function HomeCtrl(Room, $firebaseAuth) {
//        var auth = $firebaseAuth();
         
        // login with Facebook
//          auth.$signInWithPopup("facebook").then(function(firebaseUser) {
//            console.log("Signed in as:", firebaseUser.uid);
//          }).catch(function(error) {
//            console.log("Authentication failed:", error);
//          });
         console.log(Room.toString());
        this.roomData = Room;
     }
  
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$firebaseAuth', HomeCtrl]);
 })();
