angular
.module('DogApp')
.controller('WalkNewCtrl', WalkNewCtrl);

WalkNewCtrl.$inject = ['Walk', '$state','TokenService'];

function WalkNewCtrl (Walk, $state, TokenService) {
  const vm = this;
  vm.create= walkCreate;
  function walkCreate(){
    if (vm.addWalkForm.$valid) {
      Walk
      .save(vm.walk)
      .$promise
      .then(() => {
        $state.go('usersShow',{ id: TokenService.decodeToken().id });
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
