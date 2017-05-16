angular
.module('DogApp')
.controller('DogNewCtrl', DogNewCtrl);

DogNewCtrl.$inject = ['Dog', '$state'];

function DogNewCtrl (Dog, $state) {
  const vm = this;
  vm.create= dogCreate;
  function dogCreate(){
    if (vm.addDogForm.$valid) {
      Dog
      .save(vm.dog)
      .$promise
      .then(() => {
        $state.go('dogsIndex');
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
