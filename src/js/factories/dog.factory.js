angular
.module('DogApp')
.factory('Dog', Dog);

Dog.$inject = ['API', '$resource'];
function Dog(API, $resource) {
  return $resource(`${API}/dogs/:id`,
    { id: '@_id' },
    {
      'update': { method: 'PUT'},
      'addWalk': { method: 'PUT', url: `${API}/dogs/:id/walks`}
    }
  );
}
