'use strict';
import c3 from '../resources/c3';
import styles from './componentStyles/MaintLineGraph.scss';

const MaintLineGraph = React.createClass({
  renderLineGraph(){
    if (this.props.gasCar === undefined) {
      return null;
    }

    //IF ALL CARS ARE THERE
    else if (this.props.hybridCar !== undefined && this.props.electricCar !== undefined) {
      let gasMaintArr;
      let hybridMaintArr;
      let electricMaintArr;
      let chart;

      //check GAS
      if (this.props.gasCar.maintenance === null){
        gasMaintArr = [0];
      }
      else {
        gasMaintArr = this.props.gasCar.maintenance;
      }
      if (gasMaintArr[0] !== 'Gas') {
        gasMaintArr.unshift('Gas');
      }

      //check HYBRID
      if (this.props.hybridCar.maintenance === null){
        hybridMaintArr = [0];
      }
      else {
        hybridMaintArr = this.props.hybridCar.maintenance;
      }
      if (hybridMaintArr[0] !== 'Hybrid') {
        hybridMaintArr.unshift('Hybrid');
      }

      //check ELECTRIC
      if (this.props.electricCar.maintenance === null){
        electricMaintArr = [0];
      }
      else {
        electricMaintArr = this.props.electricCar.maintenance;
      }
      if (electricMaintArr[0] !== 'Electric') {
        electricMaintArr.unshift('Electric');
      }

      //LINE GRAPH
      chart = c3.generate({
        bindto: '#maintLineGraph',
        data: {
          columns: [
            gasMaintArr,
            hybridMaintArr,
            electricMaintArr
          ]
        },
        color: {
          pattern: ['#4F4F4F', '#4FA9CD', '#93CC5D']
        },
        axis: {
          x: {
            label: {
              text: 'Years',
              position: 'outer-center',
            },
            min: 1
          },
          y: {
            label: {
              text: 'Dollars',
              position: 'outer-middle'
            }
          }
        },
        size: {
          width: 1200,
          height: 400
        },
        padding: {
          bottom: 23,
          right: 25
        },
        legend: {
          position: 'inset'
        }
      });
    }

    //IF ONLY GAS AND ELECTRIC
    else if (this.props.electricCar !== undefined && this.props.hybridCar === undefined) {
      let gasMaintArr;
      let electricMaintArr;

      //check GAS
      if (this.props.gasCar.maintenance === null){
        gasMaintArr = [0];
      }
      else {
        gasMaintArr = this.props.gasCar.maintenance;
      }
      if (gasMaintArr[0] !== 'Gas') {
        gasMaintArr.unshift('Gas');
      }


      //check ELECTRIC
      if (this.props.electricCar.maintenance === null){
        electricMaintArr = [0];
      }
      else {
        electricMaintArr = this.props.electricCar.maintenance;
      }
      if (electricMaintArr[0] !== 'Electric') {
        electricMaintArr.unshift('Electric');
      }

      //LINE GRAPH
      let chart = c3.generate({
        bindto: '#maintLineGraph',
        data: {
          columns: [
            gasMaintArr,
            electricMaintArr
          ]
        },
        color: {
          pattern: ['#4F4F4F','#93CC5D']
        },
        axis: {
          x: {
            label: {
              text: 'Years',
              position: 'outer-center',
            },
            min: 1
          },
          y: {
            label: {
              text: 'Dollars',
              position: 'outer-middle'
            }
          }
        },
        size: {
          width: 1200,
          height: 400
        },
        padding: {
          bottom: 23,
          right: 25
        },
        legend: {
          position: 'inset'
        }
      });
    }

    //IF ONLY GAS AND HYBRID
    else if (this.props.hybridCar !== undefined && this.props.electricCar === undefined) {
      let gasMaintArr;
      let hybridMaintArr;

      //check GAS
      if (this.props.gasCar.maintenance === null){
        gasMaintArr = [0];
      }
      else {
        gasMaintArr = this.props.gasCar.maintenance;
      }
      if (gasMaintArr[0] !== 'Gas') {
        gasMaintArr.unshift('Gas');
      }


      //check HYBRID
      if (this.props.hybridCar.maintenance === null){
        hybridMaintArr = [0];
      }
      else {
        hybridMaintArr = this.props.hybridCar.maintenance;
      }
      if (hybridMaintArr[0] !== 'Hybrid') {
        hybridMaintArr.unshift('Hybrid');
      }

      //LINE GRAPH
      let chart = c3.generate({
        bindto: '#maintLineGraph',
        data: {
          columns: [
            gasMaintArr,
            hybridMaintArr
          ]
        },
        color: {
          pattern: ['#4F4F4F', '#4FA9CD']
        },
        axis: {
          x: {
            label: {
              text: 'Years',
              position: 'outer-center',
            },
            min: 1
          },
          y: {
            label: {
              text: 'Dollars',
              position: 'outer-middle'
            }
          }
        },
        size: {
          width: 1200,
          height: 400
        },
        padding: {
          bottom: 23,
          right: 25
        },
        legend: {
          position: 'inset'
        }
      });
    }
  },
  render(){
    this.props.gasCar ? this.renderLineGraph() : null
    return (
      <div className="maintLineGraph">
          <div className="maintHeader">5 Year Maintenance Schedule</div>
          <div className="maintCarNameContainer">
            {this.props.gasCar && <div className="maintCar maintGasCar">{this.props.gasCar.manufacturer} {this.props.gasCar.model}</div>}
            {this.props.hybridCar && <div className="maintCar maintHybridCar">{this.props.hybridCar.manufacturer} {this.props.hybridCar.model}</div>}
            {this.props.electricCar && <div className="maintCar maintElectricCar">{this.props.electricCar.manufacturer} {this.props.electricCar.model}</div>}
          </div>
          <div id="maintLineGraph"></div>
        <div className="borderLine"></div>
      </div>
    )
  }
});
export default MaintLineGraph;