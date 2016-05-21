import React from 'react';

const Car = React.createClass({
  getInitialState() {
    return {
      gasIndex: 0,
      hybridIndex: 0,
      electricIndex: 0
    }
  },
  nextGasCar: function () {
    let currGasIndex = this.state.gasIndex;
    if (currGasIndex+1 !== this.props.gasCars.length) {
      this.setState({gasIndex: currGasIndex+1})
    }
  },
  prevGasCar: function () {
    let currGasIndex = this.state.gasIndex;
    if (currGasIndex-1 >= 0) {
      this.setState({gasIndex: currGasIndex-1})
    }
  },
  nextHybridCar: function () {
    let currHybridIndex = this.state.hybridIndex;
    if (currHybridIndex+1 !== this.props.hybridCars.length) {
      this.setState({hybridIndex: currHybridIndex+1})
    }
  },
  prevHybridCar: function () {
    let currHybridIndex = this.state.hybridIndex;
    if (currHybridIndex-1 >= 0) {
      this.setState({hybridIndex: currHybridIndex-1})
    }
  },
  nextElectricCar: function () {
    let currElectricIndex = this.state.electricIndex;
    if (currElectricIndex+1 !== this.props.electricCars.length) {
      this.setState({electricIndex: currElectricIndex+1})
    }
  },
  prevElectricCar: function () {
    let currElectricIndex = this.state.electricIndex;
    if (currElectricIndex-1 >= 0) {
      this.setState({electricIndex: currElectricIndex-1})
    }
  },
  getSingleCar: function () {
    const style = {
      backgroundColor: 'pink'
    }

    return (
      <div className="cars" style={style}>
        {this.props.gasCars[0] && <div className="gasCar">
          <h3>Gas</h3>
          {this.props.gasCars[this.state.gasIndex].manufacturer} 
          {this.props.gasCars[this.state.gasIndex].model}<br/>
          {this.props.gasCars[this.state.gasIndex].msrp}<br/>
          {this.props.gasCars[this.state.gasIndex].mpgmpge.gas}<br/>
          <button onClick={this.prevGasCar}>left</button>
          <button onClick={this.nextGasCar}>right</button>
        </div>}
        {this.props.hybridCars[0] &&
        <div className="hybridCar">
          <h3>Plug-In Hybrid</h3>
          {this.props.hybridCars[this.state.hybridIndex].manufacturer} 
          {this.props.hybridCars[this.state.hybridIndex].model}<br/>
          {this.props.hybridCars[this.state.hybridIndex].msrp}<br/>
          {this.props.hybridCars[this.state.hybridIndex].mpgmpge.gas}<br/>
          <button onClick={this.prevElectricCar}>left</button>
          <button onClick={this.nextElectricCar}>right</button>
        </div>}
        {this.props.hybridCars[0] &&
        <div className="electricCar">
          <h3>Electric</h3>
          {this.props.electricCars[this.state.electricIndex].manufacturer} 
          {this.props.electricCars[this.state.electricIndex].model}<br/>
          {this.props.electricCars[this.state.electricIndex].msrp}<br/>
          {this.props.electricCars[this.state.electricIndex].mpgmpge.gas}<br/>
          <button onClick={this.prevElectricCar}>left</button>
          <button onClick={this.nextElectricCar}>right</button>
        </div>}
      </div>
    )
  },
  render: function () {
    console.log('this.props.electricCars: ', this.props.electricCars);
    return (
      <div>
      {(this.props.gasCars[0] || this.props.hybridCars[0] || this.props.electricCars[0]) && this.getSingleCar()}
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
