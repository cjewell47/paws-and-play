angular
.module('DogApp')
.factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API','TokenService'];
function AuthInterceptor(API, TokenService) {
  return {
    request(config) {
      const token = TokenService.getToken();

      console.log(token);

      return config;
    },

    rresponse(res) {
      if (res.config.url.indexOf(API) === 0 && res.data.token) {
        TokenService.setToken(res.data.token);
      }
      return res;
    }
  };
}
