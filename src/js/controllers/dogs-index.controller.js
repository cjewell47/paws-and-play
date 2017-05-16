angular
.module('DogApp')
.controller('DogIndexCtrl', DogIndexCtrl);

DogIndexCtrl.$inject = ['Dog'];

function DogIndexCtrl (Dog) {
  const vm = this;
  dogsIndex();
  function dogsIndex() {
    vm.dogs = Dog.query();

  }
}
