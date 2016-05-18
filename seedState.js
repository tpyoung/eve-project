'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
         state = require('./data/stateData.json'),
         State = require('./models/State');

function stateSeed(){
  state.forEach((stateData) => {
    let indState = new State({
      state: stateData.state,
      incentivesElectric: stateData.incentivesElectric,
      incentivesHybrid: stateData.incentivesHybrid,
      fees: stateData.fees,
      gasCost: stateData.gasCost,
      electricCost: stateData.electricCost
    });
    indState.save((err, indState) => {
      if (err) {
        return console.log(err);
      }
      else {
        console.log("state saved!")
      }
    })
  });
}

module.exports = stateSeed;