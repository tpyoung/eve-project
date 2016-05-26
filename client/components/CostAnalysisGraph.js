import React from 'react';
import c3 from '../resources/c3';
import styles from './CostAnalysisGraph.scss';

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
          bindto: `#${chartId}`,
          data: {
              columns: [
                  ['Initial Investment', vehicleInfo.msrp/6],
                  ['Maintenance', vehicleInfo.maintenance],
                  ['Energy Costs', vehicleInfo.annualFuelCost]
              ],
              type : 'donut',
              onclick: function (d, i) {  },
              onmouseover: function (d, i) {  },
              onmouseout: function (d, i) {  }
          },
          donut: {
              title: "Annual Fuel Cost"
          },
          size: {
            height: 400
          }
      });
    }
  },
  render() {
    this.props.vehicleInfo ? this.renderChart(this.props.vehicleInfo) : null
    return (
      <div className="CostAnalysisGraph">
        <div className='innerCostGraph' id="gasCostAnalysis"></div>
        <div className='innerCostGraph' id="hybridCostAnalysis"></div>
        <div className='innerCostGraph' id="electricCostAnalysis"></div>
      </div>
    )
  }
})

export default CostAnalysisGraph;