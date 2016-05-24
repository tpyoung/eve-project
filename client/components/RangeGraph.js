'use strict';

import React from 'react';
import c3 from '../resources/c3';

const RangeGraph = React.createClass({
  renderChart: function(){
    console.log('this.props',this.props);
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
    else if (this.props.gasVehicle[0] !== undefined &&
      this.props.electricVehicle[0] !== undefined) {
      var gasVehicle = this.props.gasVehicle[0];
      var electricVehicle = this.props.electricVehicle[0];
      var gasRange = gasVehicle.range.gas;
      var electricRange = electricVehicle.range.electric;
      var chart = c3.generate({
        bindto: '#RangeGraph',
        data: {
          columns: [
              ['Gas', gasRange],
              ['Electric', electricRange]
          ],
          types: {
              Gas: 'bar',
              Electric: 'bar'
          },
          colors: {
            Gas: '#4F4F4F',
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
    } //ELSE IF
    else if (this.props.gasVehicle[0] !== undefined &&
      this.props.hybridVehicle[0] !== undefined) {
      var gasVehicle = this.props.gasVehicle[0];
      var hybridVehicle = this.props.hybridVehicle[0];
      var gasRange = gasVehicle.range.gas;
      var hybridGasRange = hybridVehicle.range.gas;
      var hybridElectricRange = hybridVehicle.range.electric;
      var chart = c3.generate({
        bindto: '#RangeGraph',
        data: {
          columns: [
              ['Gas', gasRange],
              ['HybridGas', hybridGasRange],
              ['HybridElectric', hybridElectricRange],
          ],
          types: {
              Gas: 'bar',
              HybridGas: 'bar',
              HybridElectric: 'bar',
          },
          colors: {
            Gas: '#4F4F4F',
            HybridGas: '#4FA0CD',
            HybridElectric: '#4FA9FF',
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
    else if (this.props.hybridVehicle[0] === undefined &&
      this.props.electricVehicle[0] === undefined) {
      return null;
    }
  }, //end RENDERCHART

  render: function() {
    if (this.renderChart() !== null){
      this.renderChart()
      return (
        <div className="RangeGraph">
          <h3>Range Graph</h3>
          <div id="RangeGraph"></div>
        </div>
      )
    }
    else {
      return (
        <div className="RangeGraph">
          <h3>Range Graph</h3>
          <p>No range comparisons avilable</p>
        </div>
      )
    }
  }
});


export default RangeGraph;