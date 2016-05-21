import React from 'react';
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
      </div>
    )
  } 
}
ResultPage.defaultProps = {
  stateInfo: [],
};

export default ResultPage;
