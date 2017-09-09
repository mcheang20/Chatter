(function() {
     function ModalCtrl($uibModal, Room) {
        console.log(Room);
        this.items = Room;
        this.chatRoomName = "";

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
              controller: function($scope, $uibModalInstance){
                this.close = function(){
                  $uibModalInstance.close();
                }

                 this.addRoom = function( roomNameFromModal ){
                  Room.add( roomNameFromModal );
                  this.close();
                 }

              },
              resolve: {
                items: function () {
                  return this.items;
                }
              }
           });
        }
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
 })();
