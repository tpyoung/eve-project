'use strict'
import Car from './Car';
import EpaGHGRatingGraph from './EpaGHGRatingGraph';
import styles from './componentStyles/ResultPage.scss';
import CostPer100Miles from './CostPer100Miles';
import Disclaimer from './Disclaimer';
import MaintLineGraph from './MaintLineGraph';


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
        {(this.getGasCars()[0] || this.getHybridCars()[0] || this.getElectricCars()[0]) &&
          <div className="carContainer">
            <Car vehicleInfo={this.getGasCars()[this.state.gasIndex]} getCurrCar={this.getCurrCar} stateInfo={this.props.stateInfo} currIndex={this.state.gasIndex} gasLength={this.getGasCars().length} />
            <Car vehicleInfo={this.getHybridCars()[this.state.hybridIndex]} getCurrCar={this.getCurrCar} stateInfo={this.props.stateInfo} currIndex={this.state.hybridIndex} hybridLength={this.getHybridCars().length} />
            <Car vehicleInfo={this.getElectricCars()[this.state.electricIndex]} getCurrCar={this.getCurrCar} stateInfo={this.props.stateInfo} currIndex={this.state.electricIndex} electricLength={this.getElectricCars().length} />
          </div>
        }
        <MaintLineGraph gasCar={this.getGasCars()[this.state.gasIndex]} hybridCar={this.getHybridCars()[this.state.hybridIndex]} electricCar={this.getElectricCars()[this.state.electricIndex]}/>

        <div id="epaContainer">
          <div id="epaHeader">EPA's Greenhouse Gas and Fuel Economy Rating</div>
          <EpaGHGRatingGraph id='epaGasIndex' vehicleInfo={this.getGasCars()[this.state.gasIndex]}/>
          <EpaGHGRatingGraph id='epaHybridIndex' vehicleInfo={this.getHybridCars()[this.state.hybridIndex]}/>
          <EpaGHGRatingGraph id='epaElectricIndex' vehicleInfo={this.getElectricCars()[this.state.electricIndex]} />
          <div className='bottomBorder'></div>
        </div>

          <CostPer100Miles gasCar={this.getGasCars()[this.state.gasIndex]} hybridCar={this.getHybridCars()[this.state.hybridIndex]} electricCar={this.getElectricCars()[this.state.electricIndex]} stateInfo={this.props.stateInfo[0]} />
          <Disclaimer />
      </div>
    )
  }
})
ResultPage.defaultProps = {
  stateInfo: [],
};

export default ResultPage;
