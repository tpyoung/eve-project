'use strict';
import React from 'react';
import c3 from '../resources/c3';
import styles from './EpaGHGRatingGraph.scss';

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
      let chartClass;
      switch (vehicleInfo.power) {
        case 'Gas':
          chartClass = 'gasEpa';
          break;
        case 'Plug-In Hybrid':
          chartClass = 'hybridEpa';
          break;
        case 'Electric':
          chartClass = 'electricEpa';
          break;
      }

      // console.log('vehicleInfo.power, vehicleInfo.fuelEconomyGHGRating: ', vehicleInfo.power, vehicleInfo.fuelEconomyGHGRating);
      this.chart = c3.generate({
        bindto: `.${chartClass}`,
          data: {
              columns: [
                ['rating', vehicleInfo.fuelEconomyGHGRating]
              ],
              type: 'gauge',
              onclick: function (d, i) {},
              onmouseover: function (d, i) {},
              onmouseout: function (d, i) {}
          },
          tooltip: {
            show: false
          },
          color: {
            pattern: ['#F56262', '#FE944C', '#FEE770', '#B9F27C', '#B9F27C', '#7CD85B'],
            threshold: {
    //            unit: 'value', // percentage is default
    //            max: 200, // 100 is default
                values: [3, 6, 9, 10]
            }
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
          },
          size: {
            height: 225
          }
      });
    }
  },
  render() {
    {this.props.vehicleInfo && this.renderChart(this.props.vehicleInfo)}
      return (
        <div className="epaGraphs">
          <h3>EPA Greenhouse Gas and Fuel Economy Rating</h3>
          <div id="gasEpa"></div>
          <div id="hybridEpa"></div>
          <div id="electricEpa"></div>
        </div>
      )
    }
});

export default EpaGHGRatingGraph;
