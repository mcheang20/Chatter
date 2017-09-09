(function() {
     function HomeCtrl(Room, Message) {
        this.roomData = Room;
        this.messageData = Message;
        this.messageName = "";

        this.setTime = new Date();

        this.sendMessage = function(messageContent){
          Message.send(messageContent);
          this.messageName = "";
        }

        var mobileNav = document.getElementById('mobile-btn');
        var closeNav = document.getElementById('close-btn');
        var sidebar = document.getElementById('sidebar-nav');
        closeNav.addEventListener('click', closeSideBar);
        mobileNav.addEventListener('click', openSideBar);

        function openSideBar(){
          sidebar.style.display = "block";
          sidebar.style.opacity = .9;
        }

        function closeSideBar(){
          sidebar.style.display = "none"
        }
      }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
 })();
