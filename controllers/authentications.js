const User   = require('../models/user');
const jwt    = require('jsonwebtoken');
const env    = require('../config/env');

function authenticationsRegister(req, res) {
  User
    .create(req.body, (err, user) => {
      if (err) return res.status(500).json({ message: err});

      const token = jwt.sign(user._id, env.secret, { expiresIn: 60*60*24 });

      return res.status(201).json({
        message: `Welcome ${user.username}!`,
        user,
        token
      });
    });
}

function authenticationsLogin(req, res) {
  User
    .findOne({ email: req.body.email }, (err, user) => {
      if (err) return res.status(500).json({ message: 'Something went wrong.' });
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized.' });
      }

      const token = jwt.sign(user._id, env.secret, { expiresIn: 60*60*24 });

      return res.status(200).json({
        message: `Welcome back ${user.username}!`,
        user,
        token
      });
    });
}

module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin
};
