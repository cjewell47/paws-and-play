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
          console.log(res.body);
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
            .to.have.key('users');
          expect(res.body.users)
            .to.be.an('array');
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
          console.log(res.body);
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
          expect(res.body.user)
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
          expect(res.body.user)
            .to.have.property('username')
            .that.deep.equals(gUser.username);
          expect(res.body.user)
            .to.have.property('email')
            .that.deep.equals(gUser.email);
          done();
        });
    });



  });

});
