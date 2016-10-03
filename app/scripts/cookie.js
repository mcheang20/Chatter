(function() {
  function Cookies($cookies, $uibModal) {
    
    this.animationsEnabled = true;
      
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open({
              animation: this.animationsEnabled,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'user.html',
              close: '&',
              dismiss: '&',
              backdrop: 'static',
              controller: function($scope, $uibModalInstance){
                  this.roomUserName = "Username";
                  this.close = function(){
                  $uibModalInstance.close();
                }     
                this.addUser = function( chatUserName ){
                    if(chatUserName === '') {
                        alert("username cannot be empty");
                    } else {
                        $cookies.put('blocChatCurrentUser', chatUserName);
                        this.close();
                    }
                }
             },
             controllerAs: 'user'
         })
     }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', Cookies]);
})();