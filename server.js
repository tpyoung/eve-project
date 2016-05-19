'use strict';

const express = require('express'),
          app = express(),
     mongoose = require('mongoose'),
           db = mongoose.connection,
       Schema = mongoose.Schema,
   bodyParser = require('body-parser'),
        states = require('./models/State.js'),
      Vehicle = require('./models/Vehicle.js');
    // stateSeed = require('./seedState.js'),
  // vehicleSeed = require('./seedVehicle.js');


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

app.get('/api/states', (req, res) => {
  console.log(req.body);
  states.findOne(), (err, states) => {
  console.log(states);
    if (err) {
      return console.log(err)
    }
    res.send(states)
  };
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});