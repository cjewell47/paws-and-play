const env        = require('../config/env');
const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
process.env.NODE_ENV = 'development';
mongoose.connect(env.db[process.env.NODE_ENV]);

const User = require('../models/user');

User.collection.drop();


User
.create([
  {
    username: 'jackie',
    email: 'jackie@jackie.com',
    password: 'password',
    passwordConfirmation: 'password',
    dogs: [
      { name: 'max',
        breed: 'chihuahua',
        size: 'small',
        image: 'https://www.pets4homes.co.uk/images/breeds/41/large/b00ec15d7e8513d5c9bdd8a81934792b.jpg'
      }
    ]
  }


])
.then(users => {
  console.log(`${users.length} users were saved.`);
})
.finally(() => {
  mongoose.connection.close();
});
