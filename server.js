'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');
const States = require('./models/State.js');
const Vehicles = require('./models/Vehicle.js');
// const stateSeed = require('./seedState.js');
// const vehicleSeed = require('./seedVehicle.js');
const isDeveloping = process.env.NODE_ENV !== 'Production';
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpack = require('webpack');
const config = require('./webpack.config.dev');
const path = require('path');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });
  let response = (req, res) => {
    res.write(middleware.fileSystem.readFileSync(path.join(`${__dirname}/dist/index.html`)));
    res.end();
  };

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', response);
} else {
  let response = (req, res) => {
    res.sendFile(path.join(`${__dirname}/index.html`));
  };
  // app.use(express.static(`${__dirname}/public`));
  app.get('*', response);
}

//Mongoose DB
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
});
mongoose.connect('mongodb://localhost/eve');

/* Uncomment out the "stateSeed" and "vehicleSeed" functions below
   to load state and vehicle data into your database */

// stateSeed();
// vehicleSeed();

/* GET ALL STATES */
app.get('/api/states', (req, res) => {
  States.find((err, states) => {
    if (err) {
      console.log(err)
    }
    res.json(states)
  });
});

/* GET SPECIFIC STATES BY NAME:
    ex. "Alabama" or "Hawaii"   */
app.get('/api/states/:state', (req, res) => {
  States.find({ state: req.params.state }, (err, state) => {
    if (err) {
      console.log(err)
    }
    res.json(state)
  });
});

/* GET ALL VEHICLES */
app.get('/api/vehicles', (req, res) => {
  Vehicles.find((err, vehicles) => {
    if (err) {
      console.log(err)
    }
    res.json(vehicles)
  });
});

/* GET SPECIFIC VEHICLES BY POWER TYPE:
    "Electric", "Plug-In Hybrid", "Gas" */
app.get('/api/vehicles/:power', (req, res) => {
  Vehicles.find({ power: req.params.power }, (err, vehicles) => {
    if (err) {
      console.log(err)
    }
    res.json(vehicles)
  });
});

/* GET SPECIFIC VEHICLES BY BODY TYPE:
    "Coupe", "Sedan", "Compact", "Hatchback", "SUV" */
app.get('/api/vehicles/:body', (req, res) => {
  Vehicles.find({ body: req.params.body}, (err, vehicles) => {
    if (err) {
      console.log(err)
    }
    res.json(vehicles)
  });
});

/* GET SPECIFIC VEHICLES BY MODEL */
app.get('/api/vehicles/:model', (req, res) => {
  Vehicles.find({ model: req.params.model }, (err, vehicle) => {
    if (err) {
      console.log(err)
    }
    res.json(vehicle)
  });
});



app.listen(3000, () => {
  console.log("Listening on port 3000");
});