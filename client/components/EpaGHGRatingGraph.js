'use strict';
import c3 from '../resources/c3';
import styles from './componentStyles/EpaGHGRatingGraph.scss';

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
     let gaugeColor;
     switch (vehicleInfo.power) {
       case 'Gas':
        chartClass = 'gasEpa',
        gaugeColor = '#4F4F4F';

         break;
       case 'Plug-In Hybrid':
         chartClass = 'hybridEpa',
         gaugeColor = '#4FA9CD';

         break;
       case 'Electric':
         chartClass = 'electricEpa',
         gaugeColor = '#93CC5D';
         break;
     }


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
          color: {
            pattern: [ gaugeColor ],
    //         threshold: {
    // //            unit: 'value', // percentage is default
    // //            max: 200, // 100 is default
    //             values: [3, 6, 9, 10]
    //         }
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
            height: 240
          }
      });
    }
  },
  render() {
    {this.props.vehicleInfo && this.renderChart(this.props.vehicleInfo)}
      return (
        <div className="epaGraphs">
          <div className="gasEpa"></div>
          <div className="hybridEpa"></div>
          <div className="electricEpa"></div>
        </div>
      )
    }
});

export default EpaGHGRatingGraph;