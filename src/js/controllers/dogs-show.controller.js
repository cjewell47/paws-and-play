angular
.module('DogApp')
.controller('DogShowCtrl', DogShowCtrl);

DogShowCtrl.$inject = ['Dog', '$stateParams', '$state', '$uibModal'];

function DogShowCtrl (Dog, $stateParams, $state, $uibModal) {
  const vm = this;

  Dog
  .get($stateParams)
  .$promise
  .then(data => {
    vm.dog = data;
  });

  function openModal() {
    $uibModal.open({
      templateUrl: 'js/views/templates/dogDelete.html',
      controller: 'DogsDeleteCtrl as vm',
      resolve: {
        dog: () => {
          return vm.dog;
        }
      }
    });
  }

  vm.open = openModal;

}
