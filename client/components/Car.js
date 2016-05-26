import React from 'react';
import styles from './Car.scss';
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
    let onClickNext;
    let onClickPrev;
    let flagName;
    if (this.props.vehicleInfo) {
      switch (this.props.vehicleInfo.power) {
        case 'Gas':
          onClickNext = this.nextGasCar;
          onClickPrev = this.prevGasCar;
          flagName = 'Gas';
          break;
        case 'Plug-In Hybrid':
          onClickNext = this.nextHybridCar;
          onClickPrev = this.prevHybridCar;
          flagName = 'Hybrid';
          break;
        case 'Electric':
          onClickNext = this.nextElectricCar;
          onClickPrev = this.prevElectricCar;
          flagName = 'Electric';
          break;
      }
    }
    return (
      <div className="carCards">
        <div className="carAmount">{this.props.vehicleLength} matches</div>
        {this.props.vehicleInfo ?
          <div className="car">
            <div className={`flag flag${flagName}`}></div>
            <div className={`flagPowerType flagPower${flagName}`}>{flagName}</div>
            <img className="carPhotos" src={this.props.vehicleInfo.photoLink} />
            <div className="carInfoContainer">
              <div className="modelLabel">Model</div>
              <div className="modelInfo">{`${this.props.vehicleInfo.manufacturer} ${this.props.vehicleInfo.model}`}</div>
              <div className="carLabels">MSRP</div>
              {(this.props.vehicleInfo.power==='Gas') && <div className="carLabels">MPG</div>}
              {(this.props.vehicleInfo.power==='Plug-In Hybrid') && <div className="carLabels hybridM">MPGe</div>}
              {(this.props.vehicleInfo.power==='Plug-In Hybrid') && <div className="carLabels hybridM">MPG</div>}
              {(this.props.vehicleInfo.power==='Electric') && <div className="carLabels">MPGe</div>}
              {(this.props.vehicleInfo.power==='Gas' || this.props.vehicleInfo.power==='Electric') && <div className="carInfo">{this.props.vehicleInfo.msrp}</div>}
              {(this.props.vehicleInfo.power==='Plug-In Hybrid') && <div className="hybridCarInfo">{this.props.vehicleInfo.msrp}</div>}
              {(this.props.vehicleInfo.power==='Gas') && <div className="carInfo">{this.props.vehicleInfo.mpgmpge.gas}</div>}
              {(this.props.vehicleInfo.power==='Plug-In Hybrid') && <div className="hybridCarInfo hybridM">{this.props.vehicleInfo.mpgmpge.electric}</div>}
              {(this.props.vehicleInfo.power==='Plug-In Hybrid') && <div className="hybridCarInfo hybridM">{this.props.vehicleInfo.mpgmpge.gas}</div>}
              {(this.props.vehicleInfo.power==='Electric') && <div className="carInfo">{this.props.vehicleInfo.mpgmpge.electric}</div>}
            </div>
            <div className="stateIncentiveHeader">State Incentives</div>
            <StateIncentives stateInfo={this.props.stateInfo[0]} vehicleInfo={this.props.vehicleInfo} /> 
          </div>
          :
          <div className="car">
            <img className="placeholder" src="http://www.clker.com/cliparts/z/h/B/g/r/D/soft-grey-car-hi.png" />
            <div className="placeholderMsg">No cars available</div>
          </div>
      }
        {(this.props.vehicleInfo===undefined || this.props.currIndex===0) ? <button disabled className="leftButton" onClick={onClickPrev}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Left-icon.png" /></button> : <button className="leftButton" onClick={onClickPrev}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Left-icon.png" /></button>}
        {(this.props.vehicleInfo===undefined || this.props.currIndex===this.props.vehicleLength-1) ? <button disabled className="rightButton" onClick={onClickNext}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Right-icon.png" /></button> : <button className="rightButton" onClick={onClickNext}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Right-icon.png" /></button>}
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
