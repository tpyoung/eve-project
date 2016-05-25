'use strict'

import StateIncentives from './StateIncentives';
import Car from './Car';
import CostAnalysisGraph from './CostAnalysisGraph';
import RangeGraph from './RangeGraph';
import EpaGHGRatingGraph from './EpaGHGRatingGraph';
const resultpageCSS = require('./ResultPage.scss')

const ResultPage = React.createClass({
  getInitialState() {
    return {
      gasIndex: 0,
      hybridIndex: 0,
      electricIndex: 0
    }
  },
  getGasCars : function () {
    const gasCars = this.props.vehicleInfo.filter((car) => {
      return car.power === 'Gas';
    })

    return gasCars;
  },
  getCurrCar: function (directionPowerType) {
    switch (directionPowerType) {
      case 'previous gas':
        if (this.state.gasIndex-1 >= 0) {
          this.setState({gasIndex: this.state.gasIndex-1})
        }
        break;
      case 'next gas':
        if (this.state.gasIndex+1 !== this.getGasCars().length) {
          this.setState({gasIndex: this.state.gasIndex+1})
        }
        break;
      case 'previous hybrid':
        if (this.state.hybridIndex-1 >= 0) {
          this.setState({hybridIndex: this.state.hybridIndex-1})
        }
        break;
      case 'next hybrid':
        if (this.state.hybridIndex+1 !== this.getHybridCars().length) {
          this.setState({hybridIndex: this.state.hybridIndex+1})
        }
        break;
      case 'previous electric':
        if (this.state.electricIndex-1 >= 0) {
          this.setState({electricIndex: this.state.electricIndex-1})
        }
        break;
      case 'next electric':
        if (this.state.electricIndex+1 !== this.getElectricCars().length) {
          this.setState({electricIndex: this.state.electricIndex+1})
        }
        break;
    }
  },
  getHybridCars: function () {
    const hybridCars = this.props.vehicleInfo.filter((car) => {
      return car.power === 'Plug-In Hybrid';
    })
    return hybridCars;
  },
  getElectricCars: function () {
    const electricCars = this.props.vehicleInfo.filter((car) => {
      return car.power === 'Electric';
    })
    return electricCars;
  },
  render: function () {

    return (
      <div className='ResultPage'>
        <Car vehicleInfo={this.getGasCars()[this.state.gasIndex]} getCurrCar={this.getCurrCar} />
        <Car vehicleInfo={this.getHybridCars()[this.state.hybridIndex]} getCurrCar={this.getCurrCar} />
        <Car vehicleInfo={this.getElectricCars()[this.state.electricIndex]} getCurrCar={this.getCurrCar} />
        <StateIncentives stateInfo={this.props.stateInfo} vehicleInfo={this.getGasCars()[this.state.gasIndex]}/>
        <StateIncentives stateInfo={this.props.stateInfo} vehicleInfo={this.getHybridCars()[this.state.hybridIndex]}/>
        <StateIncentives stateInfo={this.props.stateInfo} vehicleInfo={this.getElectricCars()[this.state.electricIndex]}/>
        <EpaGHGRatingGraph vehicleInfo={this.getGasCars()[this.state.gasIndex]} />
        <EpaGHGRatingGraph vehicleInfo={this.getHybridCars()[this.state.hybridIndex]} />
        <EpaGHGRatingGraph vehicleInfo={this.getElectricCars()[this.state.electricIndex]} />
        <CostAnalysisGraph vehicleInfo={this.getGasCars()[this.state.gasIndex]} />
        <CostAnalysisGraph vehicleInfo={this.getHybridCars()[this.state.hybridIndex]} />
        <CostAnalysisGraph vehicleInfo={this.getElectricCars()[this.state.electricIndex]} />
        <RangeGraph gasCar={this.getGasCars()[this.state.gasIndex]} hybridCar={this.getHybridCars()[this.state.hybridIndex]} electricCar={this.getElectricCars()[this.state.electricIndex]}/>
      </div>
    )
  }
})
ResultPage.defaultProps = {
  stateInfo: [],
};

<<<<<<< HEAD
export default ResultPage;

=======
export default ResultPage;
>>>>>>> connect-state-incentives
