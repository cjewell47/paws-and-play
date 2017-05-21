module.exports = {
  env: process.env.NODE_ENV,
  db: {
    production: process.env.MONGODB_URI,
    development: `mongodb://localhost/app-development`,
    test: `mongodb://localhost/app-${this.env}`
  },
  port: process.env.PORT || 4000,
  secret: process.env.SECRET || 'I do not really understand this part... but whatever'
};
