'use strict';
import styles from './componentStyles/Car.scss';
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
  addCommas: function (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  render: function () {
    if (this.props.vehicleInfo && this.props.vehicleInfo.power === 'Gas') {
      let matches = "matches";
      if (this.props.gasLength === 1){
        matches = "match";
      }
      return (
        <div className="carCards">
          <div className="carAmount">{this.props.gasLength} {matches}</div>
          <div className="car">
            <div className={`flag flagGas`}></div>
            <div className={`flagPowerType flagPowerGas`}>Gas</div>
            <img className="carPhotos" src={this.props.vehicleInfo.photoLink} />
            <div className="carInfoContainer">
              <div className="modelLabel">Model</div>
              <div className="modelInfo">{`${this.props.vehicleInfo.manufacturer} ${this.props.vehicleInfo.model}`}</div>
              <div className="carLabels">MSRP</div>
              <div className="carLabels">MPG</div>
              <div className="carInfo">${this.addCommas(this.props.vehicleInfo.msrp)}</div>
              <div className="carInfo">{this.props.vehicleInfo.mpgmpge.gas}</div>
            </div>
            <div className="stateIncentiveHeader">State Incentives</div>
            <StateIncentives stateInfo={this.props.stateInfo[0]} vehicleInfo={this.props.vehicleInfo} />
          </div>
          {this.props.currIndex===0 ? <button disabled className="leftButton" onClick={this.prevGasCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Left-icon.png" /></button> : <button className="leftButton" onClick={this.prevGasCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Left-icon.png" /></button>}
          {(this.props.currIndex===this.props.gasLength-1) ? <button disabled className="rightButton" onClick={this.nextGasCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Right-icon.png" /></button> : <button className="rightButton" onClick={this.nextGasCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Right-icon.png" /></button>}
        </div>
      )
    }
    else if (this.props.vehicleInfo && this.props.vehicleInfo.power === 'Plug-In Hybrid') {
      let matches = "matches";
      let mpgmpge = this.props.vehicleInfo.mpgmpge.electric;
      if (this.props.hybridLength === 1){
        matches = "match";
      }
      if (this.props.vehicleInfo.mpgmpge.electric === null) {
        mpgmpge = 'N/A';
      }
      return (
        <div className="carCards">
          <div className="carAmount">{this.props.hybridLength} {matches}</div>
          <div className="car">
            <div className={`flag flagHybrid`}></div>
            <div className={`flagPowerType flagPowerHybrid`}>Hybrid</div>
            <img className="carPhotos" src={this.props.vehicleInfo.photoLink} />
            <div className="carInfoContainer">
              <div className="modelLabel">Model</div>
              <div className="modelInfo">{`${this.props.vehicleInfo.manufacturer} ${this.props.vehicleInfo.model}`}</div>
              <div className="carLabels">MSRP</div>
              <div className="carLabels hybridM">MPGe</div>
              <div className="carLabels hybridM">MPG</div>
              <div className="hybridCarInfo">${this.addCommas(this.props.vehicleInfo.msrp)}</div>
              <div className="hybridCarInfo hybridM">{mpgmpge}</div>
              <div className="hybridCarInfo hybridM">{this.props.vehicleInfo.mpgmpge.gas}</div>
            </div>
            <div className="stateIncentiveHeader">State Incentives</div>
            <StateIncentives stateInfo={this.props.stateInfo[0]} vehicleInfo={this.props.vehicleInfo} />
          </div>
          {this.props.currIndex===0 ? <button disabled className="leftButton" onClick={this.prevHybridCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Left-icon.png" /></button> : <button className="leftButton" onClick={this.prevHybridCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Left-icon.png" /></button>}
          {(this.props.currIndex===this.props.hybridLength-1) ? <button disabled className="rightButton" onClick={this.nextHybridCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Right-icon.png" /></button> : <button className="rightButton" onClick={this.nextHybridCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Right-icon.png" /></button>}
        </div>
      )
    }
    else if (this.props.vehicleInfo && this.props.vehicleInfo.power==='Electric') {
      let matches = "matches";
      if (this.props.electricLength === 1){
        matches = "match";
      }
      return (
        <div className="carCards">
          <div className="carAmount">{this.props.electricLength} {matches}</div>
          <div className="car">
            <div className={`flag flagElectric`}></div>
            <div className={`flagPowerType flagPowerElectric`}>Electric</div>
            <img className="carPhotos" src={this.props.vehicleInfo.photoLink} />
            <div className="carInfoContainer">
              <div className="modelLabel">Model</div>
              <div className="modelInfo">{`${this.props.vehicleInfo.manufacturer} ${this.props.vehicleInfo.model}`}</div>
              <div className="carLabels">MSRP</div>
              <div className="carLabels">MPGe</div>
              <div className="carInfo">${this.addCommas(this.props.vehicleInfo.msrp)}</div>
              <div className="carInfo">{this.props.vehicleInfo.mpgmpge.electric}</div>
            </div>
            <div className="stateIncentiveHeader">State Incentives</div>
            <StateIncentives stateInfo={this.props.stateInfo[0]} vehicleInfo={this.props.vehicleInfo} />
          </div>
          {this.props.currIndex===0 ? <button disabled className="leftButton" onClick={this.prevElectricCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Left-icon.png" /></button> : <button className="leftButton" onClick={this.prevElectricCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Left-icon.png" /></button>}
          {(this.props.currIndex===this.props.electricLength-1) ? <button disabled className="rightButton" onClick={this.nextElectricCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Right-icon.png" /></button> : <button className="rightButton" onClick={this.nextElectricCar}><img src="http://icons.iconarchive.com/icons/iconsmind/outline/32/Arrow-Right-icon.png" /></button>}
        </div>
      )
    }
    else if (this.props.vehicleInfo === undefined && this.props.gasLength===0) {
      return (
        <div className="carCards">
          <div className="car placeholderCar gasPlaceholder">
            <div className="placeholderMsg">No Matches</div>
          </div>
        </div>
      )
    }
    else if (this.props.vehicleInfo === undefined && this.props.hybridLength===0) {
      return (
        <div className="carCards">
          <div className="car placeholderCar hybridPlaceholder">
            <div className="placeholderMsg">No Matches</div>
          </div>
        </div>
      )
    }
    else if (this.props.vehicleInfo === undefined && this.props.electricLength===0) {
      return (
        <div className="carCards">
          <div className="car placeholderCar electricPlaceholder">
            <div className="placeholderMsg">No Matches</div>
          </div>
        </div>
      )
    }
  }
})



Car.defaultProps = {
  gasCars: [],
  hybridCars: [],
  electricCars: []
}


export default Car;
