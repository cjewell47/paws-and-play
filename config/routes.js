const express  = require('express');
const router   = express.Router();

const authentications = require('../controllers/authentications');
const users           = require('../controllers/users');
const dogs            = require('../controllers/dogs');


router.route('/register')
.post(authentications.register);
router.route('/login')
.post(authentications.login);

router.route('/users')
.get(users.index);
router.route('/users/:id')
.get(users.show)
.put(users.update)
.delete(users.delete);

router.route('/dogs')
.get(dogs.index);
router.route('/dogs/:id')
.get(dogs.show)
.put(dogs.update)
.delete(dogs.delete);

module.exports = router;
