import React from 'react';
import c3 from '../resources/c3';

const CostAnalysisGraph = React.createClass({
  renderChart: function () {
    // var initialInvestment = this.props.currGasCar.msrp / 6;
    // var annualFuelCost = this.props.currGasCar.annualFuelCost;
    // var maintenanceCost = this.props.currGasCar.maintenance;

    var chart = c3.generate({
          bindto: '#CostAnalysisGraph',
          data: {
              columns: [
                  ['InitialInvestment', 21445],
                  ['Maintenance', 816.6],
                  ['EnergyCosts', 2000],
              ],
            colors: {
              InitialInvestment: '#4F4F4F',
              Maintenance: '#4FA0CD',
              EnergyCosts: '#93CC5D'
            },
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "Annual Fuel Cost"
          }
      });
  },
  render() {
    this.renderChart();
    return (
      <div className="CostAnalysisGraph">
        <h3>ohhai cost analysis</h3>
        <div id="CostAnalysisGraph"></div>
      </div>
    )
  }
})

export default CostAnalysisGraph;
