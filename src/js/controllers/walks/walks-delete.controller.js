angular
.module('DogApp')
.controller('WalksDeleteCtrl', WalksDeleteCtrl);


WalksDeleteCtrl.$inject = ['walk', '$state', '$location', '$stateParams', 'TokenService'];
function WalksDeleteCtrl(walk, $state, $location, $stateParams, TokenService) {
  var vm = this;
  vm.walk = walk;
  console.log($stateParams);



  function walksDelete() {
    vm.walk
    .$remove()
    .then(() => {
      // $location.path(`/users/${$stateParams.id}`);
      $state.go('usersShow',{ id: TokenService.decodeToken().id });


    });
  }

  vm.delete = walksDelete;
}
