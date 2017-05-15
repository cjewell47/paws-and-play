const env        = require('../config/env');
const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
process.env.NODE_ENV = 'development';
mongoose.connect(env.db[process.env.NODE_ENV]);

const User = require('../models/user');
const Dog  = require('../models/dog');

User.collection.drop();
Dog.collection.drop();

User
  .create([
    {
      username: 'jackie',
      email: 'jackie@jackie.com',
      password: 'password',
      passwordConfirmation: 'password'
    }, {
      username: 'bobby',
      email: 'bobby@bobby.com',
      password: 'password',
      passwordConfirmation: 'password'
    }, {
      username: 'raul',
      email: 'raul@raul.com',
      password: 'password',
      passwordConfirmation: 'password'
    }, {
      username: 'zinedine',
      email: 'zinedine@zinedine.com',
      password: 'password',
      passwordConfirmation: 'password'
    }, {
      username: 'diego',
      email: 'diego@diego.com',
      password: 'password',
      passwordConfirmation: 'password'
    }, {
      username: 'lebron',
      email: 'lebron@lebron.com',
      password: 'password',
      passwordConfirmation: 'password'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were saved.`);

    Dog
      .create([
        {
          owner: users[0].id,
          name: 'nero',
          breed: 'labrador',
          image: 'https://vetstreet.brightspotcdn.com/dims4/default/03f7acf/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F36%2F4fccb0a10611e087a80050568d634f%2Ffile%2FLabrador-4-645mk062111.jpg',
          size: 'medium'
        }
      ])
      .then(dogs => {
        console.log(`${dogs.length} users were saved.`);
        
      });

  })
  .finally(() => {
    mongoose.connection.close();
  });
