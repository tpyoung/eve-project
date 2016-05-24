'use strict'

import StateIncentives from './StateIncentives';
import Car from './Car';
import CostAnalysisGraph from './CostAnalysisGraph';
import RangeGraph from './RangeGraph';
import EpaGHGRatingGraph from './EpaGHGRatingGraph';

const ResultPage = React.createClass({
  getGasCars : function () {
    const gasCars = this.props.vehicleInfo.filter((car) => {
      return car.power === 'Gas';
    })

    return gasCars;
  },
  getCurrCar: function (gasId, hybridId, electricId) {
    console.log(gasId);
    console.log(hybridId);
    console.log(electricId);
    // return (
    //   <div>
    //     <CostAnalysisGraph currGasCar={this.getGasCars()[gasId]} />
    //     <RangeGraph currGasCar={this.getGasCars()[gasId]} currHybridCar={this.getHybridCars()[hybridId]} currElectricCar={this.getElectricCars()[electricId]}/>
    //   </div>
    // )
  },
  // handleGraphUpdate: function () {
  //   this.chart.load({
  //           columns: [
  //             ['Initial Investment', nextProps.currGasCar.msrp/6],
  //             ['Maintenance', nextProps.currGasCar.annualFuelCost],
  //             ['Energy Costs', nextProps.currGasCar.maintenance]
  //           ]
  //         })
  // }
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
        <Car gasCars={this.getGasCars()} getCurrCar={this.getCurrCar} />
        <Car hybridCars={this.getHybridCars()} getCurrCar={this.getCurrCar} />
        <Car electricCars={this.getElectricCars()} getCurrCar={this.getCurrCar} />
        <EpaGHGRatingGraph />
        <StateIncentives stateInfo={this.props.stateInfo} vehicleInfo={this.getGasCars()}/>
        <StateIncentives stateInfo={this.props.stateInfo} vehicleInfo={this.getHybridCars()}/>
        <StateIncentives stateInfo={this.props.stateInfo} vehicleInfo={this.getElectricCars()}/>
        <CostAnalysisGraph />
      </div>
    )
  }
})
ResultPage.defaultProps = {
  stateInfo: [],
};

export default ResultPage;
        // <RangeGraph />
