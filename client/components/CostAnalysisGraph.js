import React from 'react';
import c3 from '../resources/c3';

const CostAnalysisGraph = React.createClass({
  componentWillReceiveProps(nextProps) {
    if (nextProps.vehicleInfo !== undefined && this.chart !== undefined) {
      this.chart.load({
        columns: [
          ['Initial Investment', nextProps.vehicleInfo.msrp/6],
          ['Maintenance', nextProps.vehicleInfo.annualFuelCost],
          ['Energy Costs', nextProps.vehicleInfo.maintenance]
        ]
      })
    }
    console.log('nextProps.vehicleInfo: ', nextProps.vehicleInfo);
  },
  renderChart(vehicleInfo) {
    if (!this.chart) {
      let chartId;
      switch (vehicleInfo.power) {
        case 'Gas':
          chartId = 'gasCostAnalysis';
          break;
        case 'Plug-In Hybrid':
          chartId = 'hybridCostAnalysis';
          break;
        case 'Electric':
          chartId = 'electricCostAnalysis';
          break;
      }

      this.chart = c3.generate({
          bindto: '#gasCostAnalysis',
          data: {
              columns: [
                  ['Initial Investment', vehicleInfo.msrp/6],
                  ['Maintenance', vehicleInfo.annualFuelCost],
                  ['Energy Costs', vehicleInfo.maintenance]
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
    console.log('this.props.vehicleInfo: ', this.props.vehicleInfo);
    this.props.vehicleInfo ? this.renderChart(this.props.vehicleInfo) : null
    return (
      <div className="CostAnalysisGraph">
        <h3>ohhai cost analysis</h3>
        <div id="gasCostAnalysis"></div>
      </div>
    )
  }
})

export default CostAnalysisGraph;
// {(this.props.vehicleInfo.power==='Gas') && 
//         {(this.props.vehicleInfo.power==='Plug-In Hybrid') && 
//         {(this.props.vehicleInfo.power==='Electric') && 