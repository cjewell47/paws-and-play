angular
.module('DogApp')
.controller('WalkNewCtrl', WalkNewCtrl);

WalkNewCtrl.$inject = ['Dog', '$state','TokenService', '$stateParams'];

function WalkNewCtrl (Dog, $state, TokenService, $stateParams) {
  const vm = this;
  vm.create= walkCreate;
  function walkCreate(){
    Dog
    .update($stateParams, vm.walk)
    .$promise
    .then(() => {
      console.log(vm.walk);
      // $state.go('usersShow',{ id: TokenService.decodeToken().id });
    })
    .catch(err => {
      console.log(err);
    });
  }
}
