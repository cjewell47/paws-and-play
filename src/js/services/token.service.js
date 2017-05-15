angular
.module('DogApp')
.service('TokenService', TokenService);

TokenService.$inject = ['$window'];
function TokenService($window) {
  const self = this;

  self.setToken = (token) => {
    return $window.localStorage.setItem('auth-token', token);
  };

  self.getToken = () => {
    return $window.localStorage.getItem('auth-token');
  };
}
