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
  mpgmpge: {},
  range: {},
  maintenance: Number,
  gasComparableManufacturer: String,
  gasComparableModel: String,
  hybridComparableManufacturer: String,
  hybridComparableModel: String,
});

module.exports = mongoose.model('Vehicle', vehicleSchema);