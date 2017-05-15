angular
.module('DogApp')
.controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['$stateParams', '$state', 'User', '$location'];
function UsersEditCtrl($stateParams, $state, User, $location) {
  const vm    = this;

  vm.user     = User.get($stateParams);
  vm.update   = usersUpdate;


  function usersUpdate() {
    User
    .update({ id: $stateParams.id }, vm.user)
    .$promise
    .then(user => {
      $location.path(`/users/${user._id}`);
    });
  }
}
