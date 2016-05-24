import React from 'react';
import c3 from '../resources/c3';

const CostAnalysisGraph = React.createClass({
  componentWillReceiveProps(nextProps) {
    if (nextProps.currGasCar) {
      console.log('nextProps: ', nextProps.currGasCar);
          this.chart.load({
            columns: [
              ['Initial Investment', nextProps.currGasCar.msrp/6],
              ['Maintenance', nextProps.currGasCar.annualFuelCost],
              ['Energy Costs', nextProps.currGasCar.maintenance]
            ]
          })
        }
  },
  // componentDidMount() {
  //   console.log('this.props.currGasCar: ', this.props.currGasCar);  
  // },
  renderChart: function () {
    // var initialInvestment = this.props.currGasCar.msrp / 6;
    // var annualFuelCost = this.props.currGasCar.annualFuelCost;
    // var maintenanceCost = this.props.currGasCar.maintenance;

      this.chart = c3.generate({
          bindto: '#CostAnalysisGraph',
          data: {
              columns: [
                  ['Initial Investment', this.props.currGasCar.msrp/6],
                  ['Maintenance', this.props.currGasCar.annualFuelCost],
                  ['Energy Costs', this.props.currGasCar.maintenance]
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

  },
  render() {
    {this.props.currGasCar && this.renderChart()}
    return (
      <div className="CostAnalysisGraph">
        <h3>ohhai cost analysis</h3>
        <div id="CostAnalysisGraph"></div>
      </div>
    )
  }
})

export default CostAnalysisGraph;
      