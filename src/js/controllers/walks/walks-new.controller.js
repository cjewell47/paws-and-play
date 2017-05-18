angular
.module('DogApp')
.controller('WalkNewCtrl', WalkNewCtrl);

WalkNewCtrl.$inject = ['Dog', '$state','TokenService', '$stateParams'];

function WalkNewCtrl (Dog, $state, TokenService, $stateParams) {
  const vm = this;
  vm.create = walkCreate;

  function walkCreate(){
    // console.log(vm.walk);
    // vm.date = $filter('date')(vm.walk, 'MMM d, y');
    vm.date = vm.walk.toDateString();
    console.log('DOES THIS WORK', vm.date);
    Dog
    .addWalk($stateParams, { date: vm.date })
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
