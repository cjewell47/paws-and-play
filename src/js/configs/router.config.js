angular
.module('DogApp')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider ) {
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('dogsIndex', {
    url: '/',
    templateUrl: '/js/views/dogs/home.html',
    controller: 'DogIndexCtrl',
    controllerAs: 'dogs'
  })
  .state('dogsNew', {
    url: '/dogs/new',
    templateUrl: '/js/views/dogs/new.html',
    controller: 'DogNewCtrl',
    controllerAs: 'dogs'
  })
  .state('dogsEdit', {
    url: '/dogs/:id/edit',
    templateUrl: '/js/views/dogs/edit.html',
    controller: 'DogsEditCtrl',
    controllerAs: 'dogs'
  })
  .state('dogsShow', {
    url: '/dogs/:id',
    templateUrl: '/js/views/dogs/show.html',
    controller: 'DogShowCtrl',
    controllerAs: 'dogs'
  });



  $urlRouterProvider.otherwise('/');
}
