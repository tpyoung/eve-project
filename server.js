'use strict';

const express = require('express'),
          app = express(),
     mongoose = require('mongoose'),
           db = mongoose.connection,
       Schema = mongoose.Schema,
   bodyParser = require('body-parser'),
       States = require('./models/State.js'),
     Vehicles = require('./models/Vehicle.js'),
    stateSeed = require('./seedState.js'),
  vehicleSeed = require('./seedVehicle.js');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

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