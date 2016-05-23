'use strict';

import React from 'react';
import c3 from '../resources/c3';

const RangeGraph = React.createClass({
  renderChart: function(){
    if (this.props.gasVehicle[0] !== undefined &&
      this.props.hybridVehicle[0] !== undefined &&
      this.props.electricVehicle[0] !== undefined) {
      var gasVehicle = this.props.gasVehicle[0];
      var hybridVehicle = this.props.hybridVehicle[0];
      var electricVehicle = this.props.electricVehicle[0];
      var gasRange = gasVehicle.range.gas;
      var hybridGasRange = hybridVehicle.range.gas;
      var hybridElectricRange = hybridVehicle.range.electric;
      var electricRange = electricVehicle.range.electric;
      var chart = c3.generate({
          data: {
              columns: [
                  ['Gas', 0],
                  ['HybridGas', 0],
                  ['HybridElectric', 0],
                  ['Electric', 0]
              ],
              types: {
                  Gas: 'bar',
                  Hybrid: 'bar',
                  Electric: 'bar'
              },
              colors: {
                Gas: '#FE944C',
                Hybrid: '#414F6E',
                Electric: '#9ED073'
              },
              transition: {
                duration: 2000
              }
          },
          axis: {
              rotated: true,
              x: {show:false},
              y: {show:false}
          },
          tooltip: {
        format: {
          title: function () { return 'Vehicle Range (Miles)'; }
        }
      }
    });
  },

  render() {


        // setTimeout(function () {
        //   chart.load({
        //     columns: [
        //       ['Gas', gasRange],
        //       ['Hybrid', 0],
        //       ['Electric', 0]
        //     ]
        //   })
        // }, 600);
        //   setTimeout(function () {
        //   chart.load({
        //     columns: [
        //       ['Gas', gasRange],
        //       ['Hybrid', hybridRange],
        //       ['Electric', 0]
        //     ]
        //   })
        // }, 900);
        //     setTimeout(function () {
        //   chart.load({
        //     columns: [
        //       ['Gas', gasRange],
        //       ['Hybrid', hybridRange],
        //       ['Electric', electricRange]
        //     ]
        //   })
        // }, 1200);
    return (<p>Hello</p>)
    }
  )};
});

export default RangeGraph;