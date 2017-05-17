angular
.module('DogApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', '$uibModal'];

function UsersShowCtrl (User, $stateParams, $uibModal) {
  const vm = this;

  vm.user = User.get({ id: $stateParams.id });
  vm.dogs  = vm.user.dogs;

  function userOpenModal() {
    $uibModal.open({
      templateUrl: 'js/views/templates/userDelete.html',
      controller: 'UsersDeleteCtrl as vm',
      resolve: {
        user: () => {
          return vm.user;
        }
      }
    });
  }

  

  vm.userOpenModal = userOpenModal;

}
