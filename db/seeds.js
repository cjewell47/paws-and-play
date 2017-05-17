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
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200'
    }, {
      username: 'bobby',
      email: 'bobby@bobby.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200'
    }, {
      username: 'raul',
      email: 'raul@raul.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200'
    }, {
      username: 'zinedine',
      email: 'zinedine@zinedine.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200'
    }, {
      username: 'diego',
      email: 'diego@diego.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200'
    }, {
      username: 'lebron',
      email: 'lebron@lebron.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were saved.`);

    return Dog
      .create([
        {
          owner: users[0]._id,
          name: 'nero',
          breed: 'labrador',
          image: 'https://vetstreet.brightspotcdn.com/dims4/default/03f7acf/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F36%2F4fccb0a10611e087a80050568d634f%2Ffile%2FLabrador-4-645mk062111.jpg',
          description: 'This dog is really cool.',
          size: 'medium',
          walk: {
            available: ['2017-07-07', '2017-07-08'],
            pending: [],
            accepted: []
          }

        }, {
          owner: users[1]._id,
          name: 'hero',
          breed: 'chihuahua',
          image: 'http://www.yourpurebredpuppy.com/dogbreeds/photos-CD/chihuahuasf1.jpg',
          description: 'This dog is an absolute bastard.',
          size: 'small'
        }, {
          owner: users[3]._id,
          name: 'zero',
          breed: 'schnauzer',
          image: 'https://s3-eu-west-1.amazonaws.com/w3.cdn.gpd/gb.pedigree.56/large_5878dd85-86d0-4aa6-b3c8-0dd8f3f76ed9.jpg',
          description: 'This dog looks weird.',
          size: 'small'
        }
      ])
      .then(dogs => {
        console.log(`${dogs.length} users were saved.`);

      });

  })
  .finally(() => {
    mongoose.connection.close();
  });
