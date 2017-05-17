angular
.module('DogApp')
.controller('DogIndexCtrl', DogIndexCtrl);

DogIndexCtrl.$inject = ['Dog', 'filterFilter', '$scope'];
function DogIndexCtrl (Dog, filterFilter, $scope) {
  const vm      = this;

  Dog
    .query()
    .$promise
    .then(dogs => {
      vm.dogs = dogs;
      filterDogs();
    });

  function filterDogs() {
    const params = { breed: vm.q };
    if (vm.small) params.size  = 'small';
    if (vm.medium) params.size = 'medium';
    if (vm.large) params.size  = 'large';

    vm.filtered = filterFilter(vm.dogs, params);
  }

  $scope.$watchGroup([
    () => vm.small,
    () => vm.medium,
    () => vm.large,
    () => vm.q
  ], filterDogs);

  vm.filterDogs = filterDogs;
}
