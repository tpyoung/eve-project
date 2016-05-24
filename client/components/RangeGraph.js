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
      console.log('hybridGasRange',hybridGasRange);
      var electricRange = electricVehicle.range.electric;
      var chart = c3.generate({
        bindto: '#RangeGraph',
        data: {
          columns: [
              ['Gas', gasRange],
              ['HybridGas', hybridGasRange],
              ['HybridElectric', hybridElectricRange],
              ['Electric', electricRange]
          ],
          types: {
              Gas: 'bar',
              HybridGas: 'bar',
              HybridElectric: 'bar',
              Electric: 'bar'
          },
          colors: {
            Gas: '#4F4F4F',
            HybridGas: '#4FA0CD',
            HybridElectric: '#4FA9FF',
            Electric: '#93CC5D'
          },
          transition: {
            duration: 2000
          }
        },
        axis: {
          rotated: true,
          x: {show:true},
          y: {show:true}
        },
        tooltip: {
          format: {
            title: function () { return 'Vehicle Range (Miles)'; }
          }
        }
      }); //end of CHART
    } //end IF
  }, //end RENDERCHART

  render: function() {
    this.renderChart();

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
    return (
      <div className="RangeGraph">
        <h3>Range Graph</h3>
        <div id="RangeGraph"></div>
      </div>
    )
  }
});


export default RangeGraph;