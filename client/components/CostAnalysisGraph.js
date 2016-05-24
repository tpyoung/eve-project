import React from 'react';
import c3 from '../resources/c3';

const CostAnalysisGraph = React.createClass({
  getInitialState() {
      return {
          count: 10
      };
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.currGasCar) {
      this.chart.load({
        columns: [
          ['Initial Investment', nextProps.currGasCar.msrp/6],
          ['Maintenance', nextProps.currGasCar.annualFuelCost],
          ['Energy Costs', nextProps.currGasCar.maintenance]
        ]
      })
    }
  },
  renderChart(currGasCar) {
    if (!this.chart) {
      
      this.chart = c3.generate({
          bindto: '#gasCostAnalysis',
          data: {
              columns: [
                  ['Initial Investment', currGasCar.msrp/6],
                  ['Maintenance', currGasCar.annualFuelCost],
                  ['Energy Costs', currGasCar.maintenance]
              ],
              type : 'donut',
              onclick: function (d, i) {  },
              onmouseover: function (d, i) {  },
              onmouseout: function (d, i) {  }
          },
          donut: {
              title: "Annual Fuel Cost"
          }
      });
    }

  },
  render() {
    this.props.currGasCar ? this.renderChart(this.props.currGasCar) : null
    return (
      <div className="CostAnalysisGraph">
        <h3>ohhai cost analysis</h3>
        <div id="gasCostAnalysis"></div>
      </div>
    )
  }
})

export default CostAnalysisGraph;
