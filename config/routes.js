const express  = require('express');
const router   = express.Router();

const authentications = require('../controllers/authentications');
const users           = require('../controllers/users');
const dogs            = require('../controllers/dogs');
// const walks            = require('../controllers/walks');


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
.get(dogs.index)
.post(dogs.create);
router.route('/dogs/:id')
.get(dogs.show)
.put(dogs.update)
.delete(dogs.delete);


// router.route('/walks')
// .get(walks.index)
// .post(walks.create);
// router.route('/walks/:id')
// .get(walks.show)
// .put(walks.update)
// .delete(walks.delete);

module.exports = router;
