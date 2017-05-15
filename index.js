const express      = require('express');
const mongoose     = require('mongoose');
mongoose.Promise   = require('bluebird');
const expressJWT   = require('express-jwt');
const morgan       = require('morgan');
const bodyParser   = require('body-parser');
const cors         = require('cors');
const port         = process.env.PORT || 4000;
const app          = express();
const dest         = `${__dirname}/public`;
const env          = require('./config/env');
const router       = require('./config/routes');
//const errorHandler = require('./lib/errors');


mongoose.connect(env.db[process.env.NODE_ENV]);

app.use(express.static(dest));

if (app.get('env') !== 'production') app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api', expressJWT({ secret: env.secret })
//   .unless({
//     path: [
//       { url: '/api/register', methods: ['POST'] },
//       { url: '/api/login',    methods: ['POST'] }
//     ]
//   }));
app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== 'UnauthorizedError') return next();
  return res.status(401).json({ message: 'Unauthorized request.' });
}

app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));
//app.use(errorHandler);

app.listen(port, () => console.log(`Express has started on port: ${port}`));

module.exports = app;
