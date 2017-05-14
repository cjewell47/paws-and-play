angular
.module('DogApp')
.controller('DogNewCtrl', DogNewCtrl);

DogNewCtrl.$inject = ['Dog', '$state'];

function DogNewCtrl (Dog, $state) {
  const vm = this;
  vm.create= dogCreate;
  function dogCreate(){
    Dog
    .save(vm.dog)
    .$promise
    .then(() => {
      $state.go('dogsIndex');
    });
  }
}
