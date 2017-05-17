angular
  .module('DogApp')
  .controller('WalkSelectCtrl', WalkSelectCtrl);

WalkSelectCtrl.$inject = ['dog', '$uibModalInstance'];
function WalkSelectCtrl(dog, $uibModalInstance) {
  const vm = this;
  vm.dog = dog;
}
