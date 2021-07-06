'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

const authRoutes = require('./auth/router.js');
const v1Routes = require('./auth/v1.js');
const v2Routes = require('./auth/v2.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(logger);

app.get('/', lifeProof);
function lifeProof(req, res) {
  res.status(200).json('home route');
}
// Routes
app.use(authRoutes);
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Catchalls
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    if (!port) {
      throw new Error('Missing Port');
    }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
