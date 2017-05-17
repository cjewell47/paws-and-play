// angular
// .module('DogApp')
// .controller('WalksEditCtrl', WalksEditCtrl);
//
// WalksEditCtrl.$inject = ['$stateParams', '$state', 'Walk', '$location', 'TokenService'];
// function WalksEditCtrl($stateParams, $state, Walk, $location, TokenService) {
//   const vm = this;
//
//   vm.walk = Walk.get($stateParams);
//   vm.update   = walksUpdate;
//
//
//   function walksUpdate() {
//     if (vm.editWalkForm.$valid) {
//       Walk
//       .update({ id: $stateParams.id }, vm.walk)
//       .$promise
//       .then(walk => {
//         $state.go('usersShow',{ id: TokenService.decodeToken().id });
//       });
//     }
//   }
//
//   console.log($stateParams);
//
//
// }
