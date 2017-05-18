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
  // console.log(req.body);
  console.log(req.body);
  User
  .findById(req.body.request)
  .exec()
  .then(user => {
    user.messages.push('You got a walk m8!');
  })
  .catch(next);

  Dog
  .findById(req.body.dog)
  .exec()
  .then(dog => {
    // console.log('********', dog);
    for (let i = 0; i < dog.walks.length; i++) {
      const date1 = new Date(dog.walks[i].date);
      const date2 = new Date(req.body.walk.date);
      if (date1.toString() === date2.toString()) {
        // req.body.request.populate('walker');
        // req.body.walker
        //delete dog.walk[i];
        dog.walks.splice(i, 1);
        //setTimeout(delete dog.walks[i], 2000);
        console.log('got here!!!!!!!');
      }
    }
    return dog.save();
  });
  //   .then((dog) => {
  //     return res.status(201).json(dog);
  //   })
  //   .catch(next);
}
