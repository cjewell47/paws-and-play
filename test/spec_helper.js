process.env.NODE_ENV = 'test';

const chai      = require('chai');
const supertest = require('supertest');
const app       = require('../index');

module.exports = {
  api: supertest(app),
  expect: chai.expect
};
