angular
.module('DogApp')
.controller('DogShowCtrl', DogShowCtrl);

DogShowCtrl.$inject = ['Dog', '$stateParams', '$state'];

function DogShowCtrl (Dog, $stateParams, $state) {
  const vm = this;
  Dog
  .get($stateParams)
  .$promise
  .then(data => {
    vm.dog = data;
  });
}
