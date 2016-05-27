'use strict';
import c3 from '../resources/c3';
import styles from './c3Styles.scss';

const costPer100MilesCSS = require('./CostPer100Miles.scss');

const costPer100Miles = React.createClass({
  CreateBarGraph: function(){
    var gasCost;
    var hybridGasCost;
    var hybridElectricCost;
    var electricCost;

    if (this.props.stateInfo === undefined ||
      this.props.gasCar === undefined){
      return null;
    }
    if (this.props.hybridCar !== undefined && this.props.electricCar !== undefined) {
      gasCost = (this.props.gasCar.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2)
      hybridGasCost = (this.props.hybridCar.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2);
      hybridElectricCost = (this.props.hybridCar.energyPer100Miles.electric * this.props.stateInfo.electricCost).toFixed(2);
      electricCost = (this.props.electricCar.energyPer100Miles.electric * this.props.stateInfo.electricCost).toFixed(2);
      var chart = c3.generate({
        bindto: '#barGraph',
        data: {
          columns: [
            ['Electric', electricCost],
            ['Hybrid Electric', hybridElectricCost],
            ['Hybrid Gas', hybridGasCost],
            ['Gas', gasCost]
          ],
          type: 'bar'
        },
        axis: {
          rotated: true,
          x: {show:true},
          y: {show:true}
        },
        color: {
          pattern: ['#93CC5D', '#82D5BA', '#4FA9CD',  '#4F4F4F' ]
        },
        bar: {
          width: 50
        },
        tooltip: {
        format: {
            title: function () { 'Hi' },
            value: function (value, ratio, id) {
                var format = id === 'data1' ? d3.format(',') : d3.format('$');
                return format(value);
            }
//            value: d3.format(',') // apply this format to both y and y2
        }
    }
      }); //end of CHART
    }
    return chart;
  },
  render() {
      this.props.gasCar ? this.CreateBarGraph() : null
    return (
        <div className="costPer100MilesGraph">
          <h3>Cost To Drive 100 Miles</h3>
          <div id="barGraph"></div>
        </div>
      )
  }
});

export default costPer100Miles;

// <p>**Hybrid vehicles use a combination of gas and electricity, these values are for theoretical comparisons only.</p>
