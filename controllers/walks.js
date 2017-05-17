const Walk = require('../models/walk');

function walkIndex(req, res, next) {
  Walk
    .find()
    .then((walks) => res.json(walks))
    .catch(next);
}

function walkCreate(req, res, next) {
  const walk = new Walk(req.body);
  walk.owner = req.user._id;
  walk.dog   = req.user.dog;
  walk
    .save()
    // .then((walk) => res.status(201).json(walk))
    .catch(next);
}

function walkShow(req, res, next) {
  Walk
    .findById(req.params.id)
    .populate('owner')
    .then((walk) => {
      if(!walk) return res.notFound();
      res.json(walk);
    })
    .catch(next);
}

function walkUpdate(req, res, next) {
  Walk
    .findById(req.params.id)
    .then((walk) => {
      if(!walk) return res.notFound();

      for(const field in req.body) {
        walk[field] = req.body[field];
      }

      return walk.save();
    })
    .then((walk) => res.json(walk))
    .catch(next);
}

function walkDelete(req, res, next) {
  Walk
    .findById(req.params.id)
    .then((walk) => {
      if(!walk) return res.notFound();
      return walk.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: walkIndex,
  create: walkCreate,
  show: walkShow,
  update: walkUpdate,
  delete: walkDelete
};
