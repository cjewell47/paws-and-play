angular
  .module('DogApp')
  .controller('DogsEditCtrl', DogsEditCtrl);

DogsEditCtrl.$inject = ['$stateParams', '$state', 'Dog', '$location', 'TokenService'];
function DogsEditCtrl($stateParams, $state, Dog, $location, TokenService) {
  const vm = this;

  vm.dog = Dog.get($stateParams);
  vm.update   = dogsUpdate;


  function dogsUpdate() {
    if (vm.editDogForm.$valid) {
      Dog
        .update({ id: $stateParams.id }, vm.dog)
        .$promise
        .then(dog => {
          $state.go('usersShow',{ id: TokenService.decodeToken().id });
        });
    }
  }
}
