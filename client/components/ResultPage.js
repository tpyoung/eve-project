'use strict'

import StateIncentives from './StateIncentives';
import Car from './Car';
import CostAnalysisGraph from './CostAnalysisGraph';

const ResultPage = React.createClass({
  getGasCars : function () {
    const gasCars = this.props.vehicleInfo.filter((car) => {
      return car.power === 'Gas';
    })

    return gasCars;
  },
  getCurrGasCar: function (id) {
    return <CostAnalysisGraph currGasCar={this.getGasCars()[id]} />
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
        <Car gasCars={this.getGasCars()} getCurrGasCar={this.getCurrGasCar} />
        <Car hybridCars={this.getHybridCars()} />
        <Car electricCars={this.getElectricCars()} />
        <StateIncentives stateInfo={this.props.stateInfo} vehicleInfo={this.props.vehicleInfo}/>
        <CostAnalysisGraph />
      </div>
    )
  }
})
ResultPage.defaultProps = {
  stateInfo: [],
};

export default ResultPage;
