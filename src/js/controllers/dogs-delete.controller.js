angular
.module('DogApp')
.controller('DogsDeleteCtrl', DogsDeleteCtrl);


DogsDeleteCtrl.$inject = ['$uibModalInstance', 'dog', '$state', '$location', '$stateParams', 'TokenService'];
function DogsDeleteCtrl($uibModalInstance, dog, $state, $location, $stateParams, TokenService) {
  var vm = this;
  vm.dog = dog;
  console.log($stateParams);
  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;


  function dogsDelete() {
    vm.dog
    .$remove()
    .then(() => {
      // $location.path(`/users/${$stateParams.id}`);
      $state.go('usersShow',{ id: TokenService.decodeToken().id });

      $uibModalInstance.close();
    });
  }

  vm.delete = dogsDelete;
}
