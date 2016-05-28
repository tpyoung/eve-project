'use strict';
import c3 from '../resources/c3';
import styles from './componentStyles/c3Styles.scss';
const costPer100MilesCSS = require('./componentStyles/CostPer100Miles.scss');

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

    //IF ALL GAS HYBRID & ELECTRIC WITHOUT HYBRID ELECTRIC
    if (this.props.hybridCar !== undefined &&
      this.props.electricCar !== undefined &&
      this.props.hybridCar.energyPer100Miles.electric === null) {
      gasCost = (this.props.gasCar.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2)
      hybridGasCost = (this.props.hybridCar.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2);
      hybridElectricCost = (this.props.hybridCar.energyPer100Miles.electric * this.props.stateInfo.electricCost).toFixed(2);
      electricCost = (this.props.electricCar.energyPer100Miles.electric * this.props.stateInfo.electricCost).toFixed(2);
      var chart = c3.generate({
        bindto: '#barGraph',
        data: {
          columns: [
            ['Electric', electricCost],
            ['Hybrid Gas', hybridGasCost],
            ['Gas', gasCost]
          ],
          type: 'bar'
        },
        axis: {
          rotated: true,
          x: {
            show:false,
            tick:{
              outer: false
            }
          },
          y: {
            show:true,
            label: {
              text: "Dollars",
              position: 'outer-center'
            }
          }
        },
        size: {
          width: 1200,
          height: 400
        },
        padding: {
          bottom: 100,
          right: 25
        },
        legend: {
          position: 'right'
        },
        color: {
          pattern: ['#93CC5D', '#4FA9CD',  '#4F4F4F' ]
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
          }
        }
      }); //end of CHART
    }

    //If ALL GAS HYBRID AND ELECTRIC
    else if (this.props.hybridCar !== undefined &&
      this.props.electricCar !== undefined) {
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
          x: {
            show:false,
            tick:{
              outer: false
            }
          },
          y: {
            show:true,
            label: {
              text: "Dollars",
              position: 'outer-center'
            }
          }
        },
        size: {
          width: 1200,
          height: 400
        },
        padding: {
          bottom: 100,
          right: 25
        },
        legend: {
          position: 'right'
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
          }
        }
      }); //end of CHART
    }

    //IF GAS & ELECTRIC ONLY
    else if (this.props.electricCar !== undefined) {
      gasCost = (this.props.gasCar.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2)
      electricCost = (this.props.electricCar.energyPer100Miles.electric * this.props.stateInfo.electricCost).toFixed(2);
      var chart = c3.generate({
        bindto: '#barGraph',
        data: {
          columns: [
            ['Electric', electricCost],
            ['Gas', gasCost]
          ],
          type: 'bar'
        },
        axis: {
          rotated: true,
          x: {
            show:false,
            tick:{
              outer: false
            }
          },
          y: {
            show:true,
            label: {
              text: "Dollars",
              position: 'outer-center'
            }
          }
        },
        size: {
          width: 1200,
          height: 400
        },
        padding: {
          bottom: 100,
          right: 25
        },
        legend: {
          position: 'right'
        },
        color: {
          pattern: ['#93CC5D', '#4F4F4F' ]
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
          }
        }
      }); //end of CHART
    }

    //IF GAS & HYBRID ONLY
    else if (this.props.hybridCar !== undefined &&
      this.props.hybridCar.energyPer100Miles.electric !== null) {
      gasCost = (this.props.gasCar.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2)
      hybridGasCost = (this.props.hybridCar.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2);
      hybridElectricCost = (this.props.hybridCar.energyPer100Miles.electric * this.props.stateInfo.electricCost).toFixed(2);
      var chart = c3.generate({
        bindto: '#barGraph',
        data: {
          columns: [
            ['Hybrid Electric', hybridElectricCost],
            ['Hybrid Gas', hybridGasCost],
            ['Gas', gasCost]
          ],
          type: 'bar'
        },
        axis: {
          rotated: true,
          x: {
            show:false,
            tick:{
              outer: false
            }
          },
          y: {
            show:true,
            label: {
              text: "Dollars",
              position: 'outer-center'
            }
          }
        },
        size: {
          width: 1200,
          height: 400
        },
        padding: {
          bottom: 100,
          right: 25
        },
        legend: {
          position: 'right'
        },
        color: {
          pattern: ['#82D5BA', '#4FA9CD',  '#4F4F4F' ]
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
          }
        }
      }); //end of CHART
    }

    //IF GAS & HYBRID ONLY NO ELECTRIC
    else if (this.props.hybridCar !== undefined &&
      this.props.hybridCar.energyPer100Miles.electric === null) {
      gasCost = (this.props.gasCar.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2)
      hybridGasCost = (this.props.hybridCar.energyPer100Miles.gas * this.props.stateInfo.gasCost).toFixed(2);
      var chart = c3.generate({
        bindto: '#barGraph',
        data: {
          columns: [
            ['Hybrid Gas', hybridGasCost],
            ['Gas', gasCost]
          ],
          type: 'bar'
        },
        axis: {
          rotated: true,
          x: {
            show:false,
            tick:{
              outer: false
            }
          },
          y: {
            show:true,
            label: {
              text: "Dollars",
              position: 'outer-center'
            }
          }
        },
        size: {
          width: 1200,
          height: 400
        },
        padding: {
          bottom: 100,
          right: 25
        },
        legend: {
          position: 'right'
        },
        color: {
          pattern: ['#4FA9CD',  '#4F4F4F' ]
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
          }
        }
      }); //end of CHART
    }
  },
  render() {
      this.props.gasCar ? this.CreateBarGraph() : null
    return (
      <div>
        <div className="costPer100MilesGraph">
          <div id='header'>Cost To Drive 100 Miles</div>
          <div className="CostCarNameContainer100">
            {this.props.gasCar && <div className="Cars100" id="GasCar100">{this.props.gasCar.manufacturer} {this.props.gasCar.model}</div>}
            {this.props.hybridCar && <div className="Cars100" id="HybridCar100">{this.props.hybridCar.manufacturer} {this.props.hybridCar.model}</div>}
            {this.props.electricCar && <div className="Cars100" id="ElectricCar100">{this.props.electricCar.manufacturer} {this.props.electricCar.model}</div>}
          </div>
          <div id="barGraph"></div>
        </div>
      </div>
      )
  }
});


export default costPer100Miles;
