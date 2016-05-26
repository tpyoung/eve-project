'use strict';

import React from 'react';
const costPer100MilesCSS = require('./CostPer100Miles.scss');

const costPer100Miles = React.createClass({
  render() {
    if (this.props.stateInfo === undefined ||
      this.props.vehicleInfo === undefined){
      return null;
    }
    var electricPer100;
    var gasPer100;

    //Gas Vehicle
    if (this.props.vehicleInfo.energyPer100Miles.electric === null &&
      this.props.stateInfo !== undefined) {
      gasPer100 = (this.props.vehicleInfo.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2);
      return (
        <div id="gasCostPer100">
          <p>Gas: ${ gasPer100 }</p>
        </div>
      )
    }

    //Electric Vehicle
    else if (this.props.vehicleInfo.energyPer100Miles.gas === null &&
      this.props.stateInfo !== undefined) {
      electricPer100 = (this.props.vehicleInfo.energyPer100Miles.electric * this.props.stateInfo.electricCost).toFixed(2);
      return (
        <div id="electricCostPer100">
          <p>Electricity: ${electricPer100 }</p>
        </div>
      )
    }
    else {
      electricPer100 = (this.props.vehicleInfo.energyPer100Miles.electric * this.props.stateInfo.electricCost).toFixed(2);
      gasPer100 = (this.props.vehicleInfo.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2);
      return (
        <div id="hybridCostPer100">
            <p>Electricity: ${electricPer100 } per 100 miles (no gas)</p>
            <p>Gas: ${gasPer100} per 100 miles (no electric)</p>
        </div>
      )
    }
  }
});

export default costPer100Miles;

          // <p>**Hybrid vehicles use a combination of gas and electricity, these values are for theoretical comparisons only.</p>
