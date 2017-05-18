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

  function confirmWalk(dog, request, walk) {
    var info = {
      dog: dog,
      walker: request,
      walk: walk
    };
    console.log(dog);
    console.log(request);
    console.log('walk*****', walk);
    User
    .confirm($stateParams, info)

    .$promise
    .then(dog => {
      console.log('DogDogDog', dog);
    })
    .catch(err => {
      console.log(err);
    });
  }

  vm.userOpenModal = userOpenModal;
  vm.confirmWalk = confirmWalk;
}
