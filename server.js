'use strict';

const express = require('express'),
          app = express(),
     mongoose = require('mongoose'),
           db = mongoose.connection,
       Schema = mongoose.Schema,
   bodyParser = require('body-parser'),
        State = require('./models/State.js'),
      Vehicle = require('./models/Vehicle.js'),
      stateSeed = require('./seedState.js');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

//Mongoose DB
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
});
mongoose.connect('mongodb://localhost/eve');

/* Uncomment out the "stateSeed" function below to load state data into your database */
// stateSeed();

app.listen(3000, () => {
  console.log("Listening on port 3000");
});