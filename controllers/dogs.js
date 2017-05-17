const Dog = require('../models/dog');

function indexRoute(req, res, next) {
  Dog
  .find()
  .then((dogs) => res.json(dogs))
  .catch(next);
}

function createRoute(req, res, next) {
  const dog = new Dog(req.body);
  dog.owner = req.user._id;

  dog
  .save()
  .then((dog) => res.status(201).json(dog))
  .catch(next);
}

function showRoute(req, res, next) {
  Dog
  .findById(req.params.id)
  .populate('owner')
  .then((dog) => {
    if(!dog) return res.notFound();
    res.json(dog);
  })
  .catch(next);
}

function updateRoute(req, res, next) {
  Dog
  .findById(req.params.id)
  .then((dog) => {
    if(!dog) return res.notFound();

    for(const field in req.body) {
      dog[field] = req.body[field];
    }
    console.log(dog);
    return dog.save();
  })
  .then((dog) => res.json(dog))
  .catch(next);
}

function deleteRoute(req, res, next) {
  Dog
  .findById(req.params.id)
  .then((dog) => {
    if(!dog) return res.notFound();
    return dog.remove();
  })
  .then(() => res.status(204).end())
  .catch(next);
}

function walkUpdate(req, res) {
  Dog
  .findById(req.params.id)
  .exec()
  .then(dog => {
    dog.walks.push(req.body);
    console.log('DOGGGG', dog);
  });
}

// function selectWalk(req, res) {
//   Dog
//   .findById(req.params.id)
//   .then((dog) => {
//     // if(!dog) return res.notFound();
//     // dog.walk.pending = req.body.available;
//
//   }
// );
// }

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  walkUpdate: walkUpdate
};
