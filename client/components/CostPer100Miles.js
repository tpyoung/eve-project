'use strict';

import React from 'react';

const CostPerMileGraph = React.createClass({
  render() {

    var electricPer100 = this.props.energyPer100Miles.electric * this.props.state.electricCost;
    var gasPer100 = this.props.energyPer100Miles.gas * this.props.state.gasCost;

    if (electricPer100 !== null && gasPer100 !== null) {
      return (
        <div className='costPer100Miles'>
          <p>Cost Per 100 Miles</p>
          <p>Electric: { electricPer100 }</p>
          <p>Gas: { gasPer100 }</p>
        </div>
      )
    }
    else if (gasPer100 !== null) {
      return (
        <div className='costPer100Miles'>
          <p>Cost Per 100 Miles</p>
          <p>Gas: { gasPer100 }</p>
        </div>
      )
    }
    else if (electricPer100 !== null) {
      return (
        <div className='costPer100Miles'>
          <p>Cost Per 100 Miles</p>
          <p>Electric: { electricPer100 }</p>
        </div>
      )
    }
  }
});

