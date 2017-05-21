const env        = require('../config/env');
const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(env.db[process.env.NODE_ENV]||env.db.development);

const User = require('../models/user');
const Dog  = require('../models/dog');

User.collection.drop();
Dog.collection.drop();

User
  .create([
    {
      username: 'charles',
      email: 'charles@charles.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200',
      location: 'W4 231',
      mobile: '07842147542'
    }, {
      username: 'marisa',
      email: 'marisa@marisa.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200',
      location: 'W6 221',
      mobile: '07842147542'
    },{
      username: 'hassan',
      email: 'hassan@hassan.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200',
      location: 'S4 121',
      mobile: '07842147542'
    },{
      username: 'ana',
      email: 'ana@ana.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200',
      location: 'T6 A32',
      mobile: '07842147542'
    },{
      username: 'jackie',
      email: 'jackie@jackie.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200',
      location: 'M3 12M',
      mobile: '07842147542'
    },{
      username: 'bobby',
      email: 'bobby@bobby.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200',
      location: 'M2 M22',
      mobile: '07842147542'
    }, {
      username: 'raul',
      email: 'raul@raul.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200',
      location: 'S2 S32',
      mobile: '07842147542'
    }, {
      username: 'zinedine',
      email: 'zinedine@zinedine.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200',
      location: 'F2 M22',
      mobile: '07842147542'
    }, {
      username: 'diego',
      email: 'diego@diego.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200',
      location: 'S2 C23',
      mobile: '07842147542'
    }, {
      username: 'lebron',
      email: 'lebron@lebron.com',
      password: 'password',
      passwordConfirmation: 'password',
      image: 'http://fillmurray.com/200/200',
      location: 'C2 F31',
      mobile: '07842147542'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were saved.`);

    return Dog
      .create([
        {
          owner: users[0]._id,
          name: 'Willy',
          breed: 'labrador',
          image: 'http://www.thelabradorsite.com/wp-content/uploads/2015/07/4.jpg',
          description: 'This dog is really cool.',
          size: 'medium'
        }, {
          owner: users[1]._id,
          name: ' Sisi',
          breed: ' Chinese Crested',
          image: 'http://www.petwave.com/~/media/Images/Center/Breed/Dogs/Toy-Group/Chinese-Crested/Chinese-Crested-Dog-Breed.ashx',
          description: 'This dog is an absolute bastard.',
          size: 'small'
        }, {
          owner: users[2]._id,
          name: 'Culo',
          breed: 'Hungarian Puli',
          image: 'https://usercontent1.hubstatic.com/6915968.jpg',
          description: 'I love my curls.',
          size: 'medium'
        }, {
          owner: users[3]._id,
          name: 'Hero',
          breed: 'chihuahua',
          image: 'https://www.pets4homes.co.uk/images/articles/3359/large/the-chihuahua-and-dental-issues-565b28bcb513f.jpg',
          description: 'This dog is an absolute bastard.',
          size: 'small'
        },  {
          owner: users[4]._id,
          name: 'Pepe',
          breed: 'schnauzer',
          image: 'https://s-media-cache-ak0.pinimg.com/736x/9b/db/23/9bdb238df3bfdf38077faafb68d26f68.jpg',
          description: 'This dog looks weird.',
          size: 'small'
        }, {
          owner: users[6]._id,
          name: 'Hash',
          breed: 'jack russell terrier',
          image: 'https://www.pets4homes.co.uk/images/breeds/44/large/5c52b56baa2767272a5116797998144b.jpg',
          description: 'This dog looks weird.',
          size: 'small'
        }, {
          owner: users[7]._id,
          name: 'Qero',
          breed: 'great dane',
          image: 'http://buzzsharer.com/wp-content/uploads/2015/05/Great-Dane-lap-dog.jpg',
          description: 'This dog is VERY LARGE.',
          size: 'large'
        }, {
          owner: users[8]._id,
          name: 'Dero',
          breed: 'dalmatian',
          image: 'https://vetstreet.brightspotcdn.com/dims4/default/3f5041b/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F86%2Ffae2e0a73111e0a0d50050568d634f%2Ffile%2FDalmatian-1-645mk062311.jpg',
          description: 'This dog has black spots and looks like a cow.',
          size: 'large'
        }, {
          owner: users[9]._id,
          name: 'Bhoo',
          breed: 'boo dog',
          image: 'https://lh3.ggpht.com/BAkb7bc736F-4NCjnROOMZhdYsKRh3a7fEGURYHNqz_YINzjCYqyk2LD1WVTfvhrX24=h900',
          description: 'This dog looks weird.',
          size: 'small'
        }, {
          owner: users[0]._id,
          name: 'Pero',
          breed: 'pomeranian',
          image: 'https://s-media-cache-ak0.pinimg.com/736x/e3/12/1b/e3121b05b3b5d5ff6d8987fe6e293005.jpg',
          description: 'This dog is very fluffy.',
          size: 'small'
        }, {
          owner: users[2]._id,
          name: 'Gero',
          breed: 'german shepperd',
          image: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/How%20to%20calm%20a%20hyper%20dog.jpg?itok=Vg7ueySi',
          description: 'This dog is very strong.',
          size: 'large'
        }, {
          owner: users[1]._id,
          name: 'Bero',
          breed: 'bulldog',
          image: 'http://www.101dogbreeds.com/wp-content/uploads/2015/05/Victorian-Bulldog-Full-Grown.jpg',
          description: 'I have fat rolls.',
          size: 'medium'
        }, {
          owner: users[3]._id,
          name: 'Chaw',
          breed: 'chow chow',
          image: 'https://www.pets4homes.co.uk/images/breeds/55/large/d284fd1d10872b7e9a0f8f738863eb6a.jpg',
          description: 'I am very fluffy <3.<3',
          size: 'medium'
        }, {
          owner: users[4]._id,
          name: 'Sero',
          breed: 'husky',
          image: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-1.jpg',
          description: 'Very friendly with children',
          size: 'medium'
        }, {
          owner: users[2]._id,
          name: 'Harry',
          breed: 'labrador',
          image: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-1.jpg',
          description: 'This dog is very loyal, and enjoys cheese',
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
