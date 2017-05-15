const { api, expect } = require('../spec_helper');
const User            = require('../../models/user');

describe('Dogs Controller Test', () => {
  let gUser;
  let myToken;

  beforeEach(done => {
    User
      .remove()
      .then(() => done())
      .catch(done);
  });

  beforeEach(done => {
    User
      .create({
        username: 'kanye',
        email: 'kanye@kanye.com',
        password: 'password',
        passwordConfirmation: 'password'
      })
      .then(user => {
        gUser = user;
        done();
      })
      .catch(done);
  });

  afterEach(done => {
    User
      .remove()
      .then(() => done())
      .catch(done);
  });

});
