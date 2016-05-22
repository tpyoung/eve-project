'use strict';

import React from 'react';

const CostAnalysisGraph = React.createClass({
  render() {
    var initialInvestment = this.props.msrp / 6;
    var annualFuelCost = this.props.annualFuelCost;
    var maintenanceCost = this.props.maintenance;

    return (

      var chart = c3.generate({
          data: {
              columns: [
                  ['Initial Investment', initialInvestment],
                  ['Maintenance', maintenanceCost],
                  ['Energy Costs', annualFuelCost],
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "Annual Fuel Cost"
          }
      });
    )
  }
})

export default CostAnalysisGraph;