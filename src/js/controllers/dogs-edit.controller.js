angular
.module('DogApp')
.controller('DogsEditCtrl', DogsEditCtrl);

DogsEditCtrl.$inject = ['$stateParams', '$state', 'Dog', '$location', 'TokenService', '$uibModal'];
function DogsEditCtrl($stateParams, $state, Dog, $location, TokenService, $uibModal) {
  const vm = this;

  vm.dog = Dog.get($stateParams);
  vm.update   = dogsUpdate;


  function dogsUpdate() {
    if (vm.editDogForm.$valid) {
      Dog
      .update({ id: $stateParams.id }, vm.dog)
      .$promise
      .then(dog => {
        $state.go('usersShow',{ id: TokenService.decodeToken().id });
      });
    }
  }

  console.log($stateParams);

  function dogOpenModal() {
    $uibModal.open({
      templateUrl: 'js/views/templates/dogDelete.html',
      controller: 'DogsDeleteCtrl as vm',
      resolve: {
        dog: () => {
          return vm.dog;
        },
        resolve: {
          user: () => {
            return vm.user;
          }
        }
      }
    });
  }

  vm.dogOpenModal = dogOpenModal;


}
