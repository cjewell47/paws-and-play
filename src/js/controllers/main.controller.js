angular
.module('DogApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  
  $rootScope.$on('loggedIn', () => {
    console.log('USER LOGGED IN');
    vm.user = CurrentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });

  vm.logout = logout;

  function logout() {
    CurrentUserService.removeUser();
  }
}
