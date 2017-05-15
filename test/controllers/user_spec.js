const { api, expect } = require('../spec_helper');
const User            = require('../../models/user');

describe('User Controller Test', () => {
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

  describe('GET /api/users', () => {

    beforeEach(done => {
      api
      .post('/api/login')
      .set('Accept', 'application/json')
      .send({
        email: gUser.email,
        password: 'password'
      })
      .then(res => {
        myToken = res.body.token;
        done();
      })
      .catch(done);
    });

    it('should return a 200 response', function(done) {
      // this.skip();
      api
      .get('/api/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.status)
        .to.eq(200);
        done();
      });
    });
    it('should return a JSON object', function(done) {
      // this.skip();
      api
      .get('/api/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.header['content-type'])
        .to.be.eq('application/json; charset=utf-8');
        done();
      });
    });
    it('should return an array of users', function(done) {
      // this.skip();
      api
      .get('/api/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.body)
        .to.be.an('array');
        done();
      });
    });
    it('should return an array with a user object', function(done) {
      // this.skip();
      api
      .get('/api/users')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.body)
        .to.have.property(0)
        .and.to.include.keys([
          'username',
          'email',
          '_id'
        ]);
        done();
      });
    });
  });

  describe('GET /api/users/:id', () => {

    beforeEach(done => {
      api
      .post('/api/login')
      .set('Accept', 'application/json')
      .send({
        email: gUser.email,
        password: 'password'
      })
      .then(res => {
        myToken = res.body.token;
        done();
      })
      .catch(done);
    });

    it('should return a 200 response', function(done) {
      // this.skip();
      api
      .get(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.status)
        .to.eq(200);
        done();
      });
    });
    it('should return a JSON object', function(done) {
      // this.skip();
      api
      .get(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.header['content-type'])
        .to.be.eq('application/json; charset=utf-8');
        done();
      });
    });
    it('should return a JSON object with the correct fields', function(done) {
      // this.skip();
      api
      .get(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.body)
        .to.include.keys([
          'username',
          'email',
          '_id'
        ]);
        done();
      });
    });
    it('should return a JSON object with the correct values', function(done) {
      // this.skip();
      api
      .get(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.body)
        .to.have.property('username')
        .that.deep.equals(gUser.username);
        expect(res.body)
        .to.have.property('email')
        .that.deep.equals(gUser.email);
        done();
      });
    });
    it('should not return an object when an invalid id is passed in', function(done) {
      // this.skip();
      api
      .get(`/api/users/53cb6b9b4f4ddef1ad47f943`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.status)
        .to.eq(404);
        done();
      });
    });

  });

  describe('PUT /api/users/:id', () => {

    beforeEach(done => {
      User
        .create({
          username: 'chance',
          email: 'chance@chance.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then(() => done())
        .catch(done);
    });

    beforeEach(done => {
      api
      .post('/api/login')
      .set('Accept', 'application/json')
      .send({
        email: gUser.email,
        password: 'password'
      })
      .then(res => {
        myToken = res.body.token;
        done();
      })
      .catch(done);
    });

    it('should return a 200 response', function(done) {
      // this.skip();
      api
      .put(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        user: {
          username: 'Billy'
        }
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.header['content-type'])
        .to.be.eq('application/json; charset=utf-8');
        done();
      });
    });
    it('should return a JSON object', function(done) {
      // this.skip();
      api
      .put(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        user: {
          username: 'Billy'
        }
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.status)
        .to.eq(200);
        done();
      });
    });
    it('should return a JSON object with the correct fields', function(done) {
      // this.skip();
      api
      .put(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        user: {
          username: 'Billy'
        }
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.body.user)
        .to.include.keys([
          'username',
          'email',
          '_id'
        ]);
        done();
      });
    });
    it('should return a JSON object with the correct updated values', function(done) {
      // this.skip();
      api
      .put(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        user: {
          username: 'Billy'
        }
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.body.user)
        .to.have.property('username')
        .that.deep.equals('Billy');
        expect(res.body.user)
        .to.have.property('email')
        .that.deep.equals(gUser.email);
        done();
      });
    });
    it('should return a 404 error and "User not found" if an invalid ID is passed in', function(done) {
      // this.skip();
      api
      .put(`/api/users/53cb6b9b4f4ddef1ad47f943`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        user: {
          username: 'Billy'
        }
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.status)
          .to.eq(404);
        expect(res.body.message)
          .to.eq('User not found.');
        done();
      });
    });
    it('should return a 500 error and "Something went wrong" message if the username is invalid', function(done) {
      // this.skip();
      api
      .put(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        user: {
          username: ''
        }
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.status)
          .to.eq(500);
        expect(res.body.message)
          .to.eq('Something went wrong.');
        done();
      });
    });
    it('should return a 500 error and "Something went wrong" message if the username or email is not unique', function(done) {
      // this.skip();
      api
      .put(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        user: {
          email: 'chance@chance.com'
        }
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.status)
          .to.eq(500);
        expect(res.body.message)
          .to.eq('Something went wrong.');
        done();
      });
    });

  });

  describe('DELETE /api/users/:id', () => {

    beforeEach(done => {
      api
      .post('/api/login')
      .set('Accept', 'application/json')
      .send({
        email: gUser.email,
        password: 'password'
      })
      .then(res => {
        myToken = res.body.token;
        done();
      })
      .catch(done);
    });

    it('should return a 200 response', function(done) {
      // this.skip();
      api
      .delete(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.status)
          .to.eq(204);
        done();
      });
    });
    it('should return an empty object', function(done) {
      // this.skip();
      api
      .delete(`/api/users/${gUser._id}`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.body)
          .to.be.an.empty('object');
        done();
      });
    });
    it('should return a 404 error and "User not found" if given an invalid id', function(done) {
      // this.skip();
      api
      .delete(`/api/users/53cb6b9b4f4ddef1ad47f943`)
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.status)
          .to.eq(404);
        expect(res.body.message)
          .to.eq('User not found.');
        done();
      });
    });
    


  });

});
