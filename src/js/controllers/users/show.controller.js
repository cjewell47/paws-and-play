angular
.module('DogApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', '$uibModal', 'Dog'];

function UsersShowCtrl (User, $stateParams, $uibModal, Dog) {
  const vm = this;

  vm.user = User.get({ id: $stateParams.id });

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

  function confirmWalk(dog, request) {
    vm.dog = dog;
    vm.request = request;
    console.log('DogsDogsDogs', vm.dog, vm.request);
  }

  vm.userOpenModal = userOpenModal;
  vm.confirmWalk = confirmWalk;
}
