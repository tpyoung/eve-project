'use strict';

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;


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
  comparableModel: String
});

module.exports = mongoose.model('Vehicle', vehicleSchema);