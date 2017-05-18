angular
.module('DogApp')
.controller('WalkNewCtrl', WalkNewCtrl);

WalkNewCtrl.$inject = ['Dog', '$state','TokenService', '$stateParams', '$location'];

function WalkNewCtrl (Dog, $state, TokenService, $stateParams, $location) {
  const vm = this;
  vm.create = walkCreate;

  function walkCreate(){
    // console.log(vm.walk);
    Dog
    .addWalk($stateParams, {date: vm.walk})
    .$promise
    .then(dog => {
      console.log('THIS IS DOG---', dog);
      // $state.go('usersShow',{ id: TokenService.decodeToken().id });
      // $location.path(`/users/${dog.owner}`);
      $state.go('usersShow', { id: dog.owner });
    })
    .catch(err => {
      console.log(err);
    });
  }
}
