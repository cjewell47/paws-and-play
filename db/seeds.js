const env     = require('../config/env');
const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
process.env.NODE_ENV = 'development';
mongoose.connect(env.db[process.env.NODE_ENV]);

const Dog = require('../models/dog');

Dog.collection.drop();


Dog
.create([
  {
    name: 'jackie',
    breed: 'labrador',
    size: 'big',
    image: 'http://www.petpact.com/wp-content/uploads/2014/12/obese-labrador.jpg'
  },
  {
    name: 'max',
    breed: 'chihuahua',
    size: 'small',
    image: 'https://www.pets4homes.co.uk/images/breeds/41/large/b00ec15d7e8513d5c9bdd8a81934792b.jpg'
  }

])
  .then(dogs => {
    console.log(`${dogs.length} dogs were saved.`);
  })
  .finally(() => {
    mongoose.connection.close();
  });
