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
    // const userIds = [];
    // users.forEach(user => {
    //   userIds.push(user._id);
    // });

    return Dog
      .create([
        {
          owner: users[0]._id,
          name: 'nero',
          breed: 'labrador',
          image: 'https://vetstreet.brightspotcdn.com/dims4/default/03f7acf/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F36%2F4fccb0a10611e087a80050568d634f%2Ffile%2FLabrador-4-645mk062111.jpg',
          size: 'medium'
        }, {
          owner: users[1]._id,
          name: 'hero',
          breed: 'chihuahua',
          image: 'http://www.yourpurebredpuppy.com/dogbreeds/photos-CD/chihuahuasf1.jpg',
          size: 'small'
        }, {
          owner: users[3]._id,
          name: 'zero',
          breed: 'schnauzer',
          image: 'https://s3-eu-west-1.amazonaws.com/w3.cdn.gpd/gb.pedigree.56/large_5878dd85-86d0-4aa6-b3c8-0dd8f3f76ed9.jpg',
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
