'use strict';

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;


const stateSchema = mongoose.Schema({
  state: String,
  incentivesElectric: {},
  incentivesHybrid: {},
  fees: [],
  gasCost: Number,
  electricCost: Number
});

module.exports = mongoose.model('State', stateSchema);