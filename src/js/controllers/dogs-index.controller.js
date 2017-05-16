angular
.module('DogApp')
.controller('DogIndexCtrl', DogIndexCtrl);

DogIndexCtrl.$inject = ['Dog', 'filterFilter', '$scope'];
function DogIndexCtrl (Dog, filterFilter, $scope) {
  const vm = this;
  vm.dogs = Dog.query();
  // dogsIndex();

  // function dogsIndex() {
    // vm.dogs = Dog.query();

  function filterDogs() {
    // const params = { name: vm.q };
    // if(vm.useBreed) params.breed = vm.breed;
    // if(vm.useSize) params.size = vm.size;

    vm.filtered = filterFilter(vm.dogs, vm.q);
  }

  $scope.$watch(() => vm.q, filterDogs);
  // $scope.$watchGroup([
  //   () => vm.q,
  //   () => vm.useSize
  // ], filterDogs);
  vm.filterDogs = filterDogs;
  // }
}
