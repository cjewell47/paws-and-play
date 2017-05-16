angular
  .module('DogApp')
  .controller('DogsDeleteCtrl', DogsDeleteCtrl);


DogsDeleteCtrl.$inject = ['$uibModalInstance', 'dog', '$state'];
function DogsDeleteCtrl($uibModalInstance, dog, $state) {
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
        $state.go('dogsIndex');
        $uibModalInstance.close();
      });
  }

  vm.delete = dogsDelete;
}
