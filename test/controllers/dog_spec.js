const { api, expect } = require('../spec_helper');
const User            = require('../../models/user');
const Dog             = require('../../models/dog');

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

  describe('GET /api/dogs', () => {

    beforeEach(done => {
      Dog
        .remove()
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

    beforeEach(done => {
      Dog
        .create({
          owner: gUser._id,
          name: 'hercules',
          breed: 'chihuahua',
          image: 'http://fillmurray.com/150/150'
        })
        .then(() => done())
        .catch(done);
    });

    afterEach(done => {
      Dog
        .remove()
        .then(() => done())
        .catch(done);
    });

    it('should return a 200 response', function(done) {
      // this.skip();
      api
      .get('/api/dogs')
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
      .get('/api/dogs')
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
    it('should return an array of dogs', function(done) {
      // this.skip();
      api
      .get('/api/dogs')
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
    it('should return an array with a dog-ish object', function(done) {
      // this.skip();
      api
      .get('/api/dogs')
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
          'owner',
          'name',
          'breed',
          'image',
          '_id',
          '__v',
          'updatedAt',
          'createdAt'
        ]);
        done();
      });
    });
    it('should return an array with a dog-ish object with the correct values', function(done) {
      // this.skip();
      api
      .get('/api/dogs')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer '+myToken)
      .send({
        email: gUser.email,
        password: 'password'
      })
      .end((err, res) => {
        if (err) console.log(err);
        expect(res.body[0])
          .to.have.property('owner')
          .that.deep.equals(gUser._id.toString());
        expect(res.body[0])
          .to.have.property('name')
          .that.deep.equals('hercules');
        expect(res.body[0])
          .to.have.property('breed')
          .that.deep.equals('chihuahua');
        expect(res.body[0])
          .to.have.property('image')
          .that.deep.equals('http://fillmurray.com/150/150');
        done();
      });
    });

  });

  describe('GET /api/dogs/:id', () => {
    let myDog;

    beforeEach(done => {
      Dog
        .remove()
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

    beforeEach(done => {
      Dog
        .create({
          owner: gUser._id,
          name: 'hercules',
          breed: 'chihuahua',
          image: 'http://fillmurray.com/150/150'
        })
        .then(() => done())
        .catch(done);
    });

    afterEach(done => {
      Dog
        .remove()
        .then(dog => {
          myDog = dog;
          done();
        })
        .catch(done);
    });

    it('should return a 200 response', function(done) {
      // this.skip();
      api
      .get(`/api/users/${myDog._id}`)
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

  });

});
