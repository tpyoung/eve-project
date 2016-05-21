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
  render() {
    return (
      <div className='ResultPage'>
        <Car gasCars={this.getGasCars()} />
        {this.props.stateInfo.map((data) => {
          return (
            <p key={data._id}>{data.state}</p>
          )
        })}
        <StateIncentives stateInfo={this.props.stateInfo} vehicleInfo={this.props.vehicleInfo}/>
      </div>
    )
  }
}
ResultPage.defaultProps = {
  stateInfo: [],
};

export default ResultPage;
