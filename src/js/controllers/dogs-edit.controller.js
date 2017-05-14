angular
  .module('DogApp')
  .controller('DogsEditCtrl', DogsEditCtrl);

DogsEditCtrl.$inject = ['$stateParams', '$state', 'Dog', '$location'];
function DogsEditCtrl($stateParams, $state, Dog, $location) {
  const vm = this;

  vm.dog = Dog.get($stateParams);
  vm.update   = dogsUpdate;


  function dogsUpdate() {
    Dog
      .update({ id: $stateParams.id }, vm.dog)
      .$promise
      .then(dog => {
        $location.path(`/dogs/${dog._id}`);
      });
  }
}
