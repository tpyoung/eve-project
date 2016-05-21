import React from 'react';
import StateIncentives from './StateIncentives';
import Car from './Car';

class ResultPage extends React.Component{ 
  getGasCars () {
    const gasCars = this.props.vehicleInfo.filter((car) => {
      return car.power === 'Gas';
    })

    return gasCars;
  }
  getHybridCars() {
    const hybridCars = this.props.vehicleInfo.filter((car) => {
      return car.power === 'Plug-In Hybrid';
    })
    return hybridCars;
  }
  getElectricCars() {
    const electricCars = this.props.vehicleInfo.filter((car) => {
      return car.power === 'Electric';
    })
    return electricCars;
  }
  render() {
    return (
      <div className='ResultPage'>
        <Car gasCars={this.getGasCars()} hybridCars={this.getHybridCars()} electricCars={this.getElectricCars()} />
        <StateIncentives stateInfo={this.props.stateInfo} vehicleInfo={this.props.vehicleInfo}/>
      </div>
    )
  }
}
ResultPage.defaultProps = {
  stateInfo: [],
};

export default ResultPage;
