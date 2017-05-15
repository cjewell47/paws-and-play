angular
  .module('DogApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.login = login;

  function login() {
    User
      .login(vm.user)
      .$promise
      .then(data => {
        console.log(data);
        CurrentUserService.getUser();
        $state.go('dogsIndex');
      })
      .catch(err => {
        console.log(err);
      });
  }
}
