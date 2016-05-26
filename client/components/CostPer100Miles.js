'use strict';

import React from 'react';
import c3 from '../resources/c3';
const costPer100MilesCSS = require('./CostPer100Miles.scss');

const costPer100Miles = React.createClass({
  CreateBarGraph: function(){
  console.log('this.props',this.props);
    var gasCost;
    var hybridGasCost;
    var hybridElectricCost;
    var electricCost;

    if (this.props.stateInfo === undefined ||
      this.props.gasCar === undefined){
      return null;
    }
    if (this.props.hybridCar !== undefined && this.props.electricCar !== undefined) {
      gasCost = (this.props.gasCar.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2)
      hybridGasCost = (this.props.hybridCar.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2);
      hybridElectricCost = (this.props.hybridCar.energyPer100Miles.electric * this.props.stateInfo.electricCost).toFixed(2);
      electricCost = (this.props.electricCar.energyPer100Miles.electric * this.props.stateInfo.electricCost).toFixed(2);

      var chart = c3.generate({
        bindto: '#barGraph',
        data: {
          columns: [
            ['Gas', gasCost],
            ['Hybrid Gas', hybridGasCost],
            ['Hybrid Electric', hybridElectricCost],
            ['Electric', electricCost]
          ],
          type: 'bar'
        },
        bar: {
          width: 200
        }
      }); //end of CHART
    }
  },
  render() {
    if (this.CreateBarGraph() === null) {
      return null
    }
    else {
      this.CreateBarGraph()
      return (
        <div className="costPer100MilesGraph">
          <h3>Cost To Drive 100 Miles</h3>
          <div id="barGraph"></div>
        </div>
      )
    }
  }
});

export default costPer100Miles;

// <p>**Hybrid vehicles use a combination of gas and electricity, these values are for theoretical comparisons only.</p>
