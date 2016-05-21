import React from 'react';
<<<<<<< HEAD
import StateIncentives from './StateIncentives';
=======
import Car from './Car';
>>>>>>> master

class ResultPage extends React.Component{
  filterGasCars () {
  }
  render() {
    console.log('this.props.vehicleInfo: ', this.props.vehicleInfo);
    // this.filterGasCars();
    return (
      <div className='ResultPage'>
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
