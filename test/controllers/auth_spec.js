const { api, expect } = require('../spec_helper');
const User            = require('../../models/user');

describe('Authentication Controller Test', () => {
  describe('POST /api/register', () => {

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
        .then(() => done())
        .catch(done);
    });

    afterEach(done => {
      User
        .remove()
        .then(() => done())
        .catch(done);
    });

    it('should return a 201 response', function(done) {
    // this.skip();
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'drake',
          email: 'drake@drake.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.status)
            .to.eq(201);
          done();
        });
    });
    it('should return a JSON object', function(done) {
    // this.skip();
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'drake',
          email: 'drake@drake.com',
          password: 'password',
          passwordConfirmation: 'password'
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
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'drake',
          email: 'drake@drake.com',
          password: 'password',
          passwordConfirmation: 'password'
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
    it('should return a JSON object with a token', function(done) {
    // this.skip();
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'drake',
          email: 'drake@drake.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.body)
              .to.include.key('token');
          done();
        });
    });
    it('should return a JSON object with the correct values', function(done) {
    // this.skip();
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'drake',
          email: 'drake@drake.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.body.user)
            .to.have.property('username')
            .that.deep.equals('drake');
          expect(res.body.user)
            .to.have.property('email')
            .that.deep.equals('drake@drake.com');
          done();
        });
    });
    it('should return a JSON object without the password', function(done) {
    // this.skip();
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'drake',
          email: 'drake@drake.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.body.user)
            .to.not.have.property('password');
          done();
        });
    });
    it('should return a 500 response if the passwords do not match', function(done) {
    // this.skip();
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'drake',
          email: 'drake@drake.com',
          password: 'password',
          passwordConfirmation: 'different'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.status)
            .to.eq(500);
          done();
        });
    });
    it('should return a Validation Error if the passwords do not match', function(done) {
    // this.skip();
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'drake',
          email: 'drake@drake.com',
          password: 'password',
          passwordConfirmation: 'different'
        })
        .end((err, res) => {
          if (err) console.log(err);
          console.log();
          expect(res.body.message.name)
            .to.eq('ValidationError');
          done();
        });
    });
    it('should return a 500 response if username is not unique', function(done) {
    // this.skip();
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'kanye',
          email: 'drake@dreke.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.status)
            .to.eq(500);
          done();
        });
    });
    it('should return a 500 response if email is not unique', function(done) {
    // this.skip();
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'drake',
          email: 'kanye@kanye.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.status)
            .to.eq(500);
          done();
        });
    });
    it('should return a validation error and a 500 response if the password is less than 6 characters', function(done) {
    // this.skip();
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'drake',
          email: 'drake@drake.com',
          password: 'pa',
          passwordConfirmation: 'pa'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.body.message.name)
            .to.eq('ValidationError');
          expect(res.status)
            .to.eq(500);
          done();
        });
    });

  });

  describe('POST /api/login', () => {

    beforeEach(done => {
      User
        .remove()
        .then(() => done())
        .catch(done);
    });

    beforeEach(done => {
      User
        .create({
          username: 'drake',
          email: 'drake@drake.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .then(() => done())
        .catch(done);
    });

    afterEach(done => {
      User
        .remove()
        .then(() => done())
        .catch(done);
    });

    it('should return a 200 response', function(done) {
    // this.skip();
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'drake@drake.com',
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
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'drake@drake.com',
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
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'drake@drake.com',
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
    it('should return a JSON object with a token', function(done) {
    // this.skip();
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'drake@drake.com',
          password: 'password'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.body)
              .to.include.key('token');
          done();
        });
    });
    it('should return a JSON object with the correct values', function(done) {
    // this.skip();
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'drake@drake.com',
          password: 'password'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.body.user)
            .to.have.property('username')
            .that.deep.equals('drake');
          expect(res.body.user)
            .to.have.property('email')
            .that.deep.equals('drake@drake.com');
          done();
        });
    });
    it('should return a JSON object without the password', function(done) {
    // this.skip();
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'drake@drake.com',
          password: 'password'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.body.user)
            .to.not.have.property('password');
          done();
        });
    });
    it('if not a valid user it should return a 401 response and send message Unauthorized', function(done) {
    // this.skip();
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'druke@druke.com',
          password: 'password'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.status)
            .to.eq(401);
          expect(res.body.message)
            .to.eq('Unauthorized.');
          done();
        });
    });
    it('if not a valid password it should return a 401 response and send message Unauthorized', function(done) {
    // this.skip();
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'drake@drake.com',
          password: 'fakeshit'
        })
        .end((err, res) => {
          if (err) console.log(err);
          expect(res.status)
            .to.eq(401);
          expect(res.body.message)
            .to.eq('Unauthorized.');
          done();
        });
    });

  });
});
