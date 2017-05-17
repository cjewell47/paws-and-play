angular
  .module('DogApp')
  .controller('WalkSelectCtrl', WalkSelectCtrl);

WalkSelectCtrl.$inject = ['dog', '$uibModalInstance'];
function WalkSelectCtrl(dog, $uibModalInstance) {
  const vm = this;
  vm.dog = dog;

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;

  function walkSelect() {
    Dog
      .update();
  }

  function setActive(date) {
    vm.date = date;
  }

  vm.select = walkSelect;

}
