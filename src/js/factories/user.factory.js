angular
.module('DogApp')
.factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/users/:id`, { id: '@_id'},

    { 'register': { method: 'POST', url: `${API}/register`},
      'login': { method: 'POST', url: `${API}/login` },
      'update': { method: 'PUT', url: `${API}/users/:id`},
      'confirm': { method: 'PUT', url: `${API}/users/:id/confirm`}

    });
}
// {'update': { method: 'PUT'}}
