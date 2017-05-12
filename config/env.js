module.exports = {
  env: process.env.NODE_ENV,
  db: {
    production: process.env.MONGODB_URI,
    development: `mongodb://localhost/app-${this.env}`,
    test: `mongodb://localhost/app-${this.env}`
  },
  secret: process.env.SECRET || 'I do not really understand this part... but whatever'
};
