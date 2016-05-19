'use strict';

import React from 'react';

const MaintenanceGraph = React.createClass({
  render(){
    return (
      <div className="maintGraph">
        <p>Gas: { this.props.gasCost }</p>
        <p>Hyprid: { this.props.hybridCost }</p>
        <p>Electric: { this.props.elecCost }</p>
      </div>
    )
  }
});

export default MaintenanceGraph;