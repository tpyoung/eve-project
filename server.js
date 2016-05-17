'use strict';

const express = require('express'),
          app = express(),
     mongoose = require('mongoose'),
           db = mongoose.connection,
       Schema = mongoose.Schema,
   bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

//Mongoose DB
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
});
mongoose.connect('mongodb://localhost/eve');

const vehicleSchema = mongoose.Schema({
  country: String,
  manufacturer: String,
  model: String,
  body: String,
  power: String,
  msrp: Number,
  mpgmpge: Number,
  range: Number,
  maintenance: Number,
  comparableManufacturer: String,
  comparableModel: String,
});

const stateSchema = mongoose.Schema({
  state: String,
  incentives: [],
  fees: String,
  gasCost: Number,
  electricCost: Number
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});