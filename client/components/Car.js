import React from 'react';
import StateIncentives from './StateIncentives';

const Car = React.createClass({
  nextGasCar: function () {
    this.props.getCurrCar('next gas');
  },
  prevGasCar: function () {
    this.props.getCurrCar('previous gas');
  },
  nextHybridCar: function () {
    this.props.getCurrCar('next hybrid');
  },
  prevHybridCar: function () {
    this.props.getCurrCar('previous hybrid');
  },
  nextElectricCar: function () {
    this.props.getCurrCar('next electric');
  },
  prevElectricCar: function () {
    this.props.getCurrCar('previous electric');
  },
  render: function () {
    let header;
    let onClickNext;
    let onClickPrev;
    if (this.props.vehicleInfo) {
      switch (this.props.vehicleInfo.power) {
        case 'Gas':
          header = 'Gas';
          onClickNext = this.nextGasCar;
          onClickPrev = this.prevGasCar;
          break;
        case 'Plug-In Hybrid':
          header = 'Plug-In Hybrid';
          onClickNext = this.nextHybridCar;
          onClickPrev = this.prevHybridCar;
          break;
        case 'Electric':
          header = 'Electric';
          onClickNext = this.nextElectricCar;
          onClickPrev = this.prevElectricCar;
          break;
      }
    }
    return (
      <div className="cars" style={{backgroundColor: 'pink'}}>
        {this.props.vehicleInfo && <div className="gasCar">
          <h3>{header}</h3>
          {this.props.vehicleInfo.manufacturer}<br/>
          {this.props.vehicleInfo.model}<br/>
          MSRP: {this.props.vehicleInfo.msrp}<br/>
          {(this.props.vehicleInfo.power==='Gas') && <div>MPG: {this.props.vehicleInfo.mpgmpge.gas}</div>}
          {(this.props.vehicleInfo.power==='Plug-In Hybrid') && <div>MPGe: {this.props.vehicleInfo.mpgmpge.electric}<br/>MPG: {this.props.vehicleInfo.mpgmpge.gas}</div>}
          {(this.props.vehicleInfo.power==='Electric') && <div>MPGe: {this.props.vehicleInfo.mpgmpge.electric}</div>}
          <StateIncentives stateInfo={this.props.stateInfo} vehicleInfo={this.props.vehicleInfo} />
          <button onClick={onClickPrev}>left</button>
          <button onClick={onClickNext}>right</button>
        </div>}
      </div>
    )
  }
})

Car.defaultProps = {
  gasCars: [],
  hybridCars: [],
  electricCars: []
}


export default Car;
