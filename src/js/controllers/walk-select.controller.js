angular
  .module('DogApp')
  .controller('WalkSelectCtrl', WalkSelectCtrl);

WalkSelectCtrl.$inject = ['dog', '$uibModalInstance', 'Dog', '$stateParams', 'CurrentUserService', '$state'];
function WalkSelectCtrl(dog, $uibModalInstance, Dog, $stateParams, CurrentUserService, $state) {
  const vm = this;
  vm.dog = dog;
  vm.user = CurrentUserService.currentUser;

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;

  function walkRequest() {
    Dog
    .selectWalk($stateParams, { date: vm.select })
    .$promise
    .then(dog => {
      vm.close();
    })
    .catch(err => {
      console.log(err);
    });
  }


  vm.request = walkRequest;

}
