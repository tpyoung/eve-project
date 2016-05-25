'use strict';

import React from 'react';
import c3 from '../resources/c3';

const EpaGHGRatingGraph = React.createClass({
  componentWillReceiveProps(nextProps) {
    if (nextProps.vehicleInfo !== undefined && this.chart !== undefined){
      this.chart.load({
        columns: [
          ['rating', nextProps.vehicleInfo.fuelEconomyGHGRating]
        ]
      })
    }
  },
  renderChart: function(vehicleInfo){
    if (!this.chart) {
      let chartId;
      switch (vehicleInfo.power) {
        case 'Gas':
          chartId = 'gasEpa';
          break;
        case 'Plug-In Hybrid':
          chartId = 'hybridEpa';
          break;
        case 'Electric':
          chartId = 'electricEpa';
          break;
      }

      this.chart = c3.generate({
        bindto: `#${chartId}`,
          data: {
              columns: [
                ['rating', vehicleInfo.fuelEconomyGHGRating]
              ],
              type: 'gauge',
              onclick: function (d, i) {},
              onmouseover: function (d, i) {},
              onmouseout: function (d, i) {}
          },
          color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044']
          },
          gauge: {
            label: {
              format: function (value, ratio) {
                return `${value}/10`;
              },
              show: false
            },
            min: 0,
            max: 10
          }
      });
    }
  },
  render() {
    console.log('this.props.vehicleInfo: ', this.props.vehicleInfo);
    {this.props.vehicleInfo && this.renderChart(this.props.vehicleInfo)}
      return (
        <div className="EpaGHGRatingGraph">
          <h3>EPA Greenhouse Gas and Fuel Economy Rating</h3>
          <div id="gasEpa"></div>
          <div id="hybridEpa"></div>
          <div id="electricEpa"></div>
        </div>
      )
    }
});

export default EpaGHGRatingGraph;
