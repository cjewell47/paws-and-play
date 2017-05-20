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
    console.log(vm.dog.walks);
  });

  function walkOpenModal() {
    $uibModal.open({
      url: `/dogs/:id/walks/select`,
      templateUrl: 'js/views/templates/walkSelect.html',
      controller: 'WalkSelectCtrl as vm',
      resolve: {
        dog: () => {
          return vm.dog;
        }
      }
    });
  }

  vm.walkOpenModal = walkOpenModal;

}
