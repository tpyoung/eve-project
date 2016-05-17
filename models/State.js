'use strict';

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;


const stateSchema = mongoose.Schema({
  state: String,
  incentives: [],
  fees: String,
  gasCost: Number,
  electricCost: Number
});