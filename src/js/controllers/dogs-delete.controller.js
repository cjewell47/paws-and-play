angular
.module('DogApp')
.controller('DogsDeleteCtrl', DogsDeleteCtrl);


DogsDeleteCtrl.$inject = ['$uibModalInstance', 'dog', '$state', '$location'];
function DogsDeleteCtrl($uibModalInstance, dog, $state, $location) {
  var vm = this;
  vm.dog = dog;

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;

  function dogsDelete() {
    vm.dog
    .$remove()
    .then(() => {
      // $location.path(`/users/${user._id}`);
      $uibModalInstance.close();
    });
  }

  vm.delete = dogsDelete;
}
