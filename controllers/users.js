module.exports = {
  index: usersIndex,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete,
  walkConfirm: walkConfirm
};

const User = require('../models/user');
const Dog  = require('../models/dog');

function usersIndex(req, res) {
  User
  .find()
  .exec()
  .then(users => res.status(200).json(users))
  .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function usersShow(req, res) {
  User
  .findById(req.params.id)
  .exec()
  .then(user => {
    if (!user) return res.status(404).json({ message: 'User not found.' });

    Dog
    .find({ owner: user._id })
    .populate('walks.requests.walker')
    .exec()
    // .populate(walker)
    .then(dogs => {
      user.dogs = dogs;
      return res.status(200).json(user);

    });
  })
  .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function usersUpdate(req, res) {
  User
  .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
  .exec()
  .then(user => {
    if (!user) return res.status(404).json({ message: 'User not found.' });
    return res.status(200).json(user);
  })
  .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function usersDelete(req, res) {
  User
  .findByIdAndRemove(req.params.id)
  .exec()
  .then(user => {
    if (!user) return res.status(404).json({ message: 'User not found.' });
    return res.sendStatus(204);
  })
  .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function walkConfirm(req, res, next) {

  const walker = User
  .findById(req.body.request.walker._id)
  .exec();

  const dog = Dog
  .findById(req.body.dog._id)
  .populate('owner')
  .exec();

  Promise.all([walker, dog])
  .then(values => {
    const walker        = values[0];
    const dog           = values[1];
    const requestDate   = new Date(req.body.walk.date);
    const indexToRemove = dog.walks.findIndex(walk => {
      return walk.date.getDate() === requestDate.getDate();
    });

    walker.messages.push(`You'll be walking ${dog.owner.username}'s dog, ${dog.name}, on ${requestDate.toDateString()}.`);
    walker.save();

    dog.walks.splice(indexToRemove, 1);
    dog.save();
  })
  .catch(next);
}
