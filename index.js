const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./app/routes');
const database = require('./utils/db');
const config = require('./config');

const app = express();

// middlewares
app.use(bodyParser.json())

// routers
app.use(apiRouter);

database.connect()
  .then(() => {
	app.listen(config.port, () => {
      console.log('API listening on port', config.port);
	  })
  })
  .catch(err => {
	  console.log('Error while trying to run api', err);
  });