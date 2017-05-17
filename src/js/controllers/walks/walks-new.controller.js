angular
.module('DogApp')
.controller('WalkNewCtrl', WalkNewCtrl);

WalkNewCtrl.$inject = ['Dog', '$state','TokenService', '$stateParams'];

function WalkNewCtrl (Dog, $state, TokenService, $stateParams) {
  const vm = this;
  vm.create = walkCreate;
  function walkCreate(){
    console.log(vm.walk);
    Dog
    .addWalk($stateParams, vm.walk)
    .$promise
    .then(dog => {
      console.log(dog);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
