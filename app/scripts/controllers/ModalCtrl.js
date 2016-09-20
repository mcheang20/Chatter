(function() {
     function ModalCtrl($uibModal, Room) {
         console.log(Room);
        this.items = Room;
        this.chatRoomName = "New Chatroom";
        
        this.addRoom = function( roomNameFromModal ){
            console.log(roomNameFromModal);
          Room.add( roomNameFromModal );
        }

        this.animationsEnabled = true;
         
        this.open = function (size) {
          var modalInstance = $uibModal.open({
              animation: this.animationsEnabled,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'create.html',
              controller: 'ModalCtrl',
              controllerAs: 'create',
              close: '&',
              dismiss: '&',
              size: size,
              resolve: {
                items: function () {
                  return this.items;
                }
              }      
           });
        }
        $uibModalInstance.dismiss('cancel');
        $uibModalInstance.close();
     }
  
     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
 })();
