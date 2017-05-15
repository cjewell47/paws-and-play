angular
  .module('DogApp')
  .service('TokenService', TokenService);

TokenService.$inject = ['$window', 'jwtHelper'];
function TokenService($window, jwtHelper) {
  const self = this;

  self.decodeToken = () => {
    const token = self.getToken();
    return token ? jwtHelper.decodeToken(token) : null;
  };

  self.getToken = () => {
    return $window.localStorage.getItem('auth-token');
  };

  self.setToken = (token) => {
    return $window.localStorage.setItem('auth-token', token);
  };

  self.removeToken = () => {
    $window.localStorage.clear();
  };
}
