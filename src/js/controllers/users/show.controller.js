angular
.module('DogApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', '$uibModal'];

function UsersShowCtrl (User, $stateParams, $uibModal) {
  const vm = this;

  vm.user = User.get({ id: $stateParams.id });

  function openModal() {
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


  vm.open = openModal;
}
