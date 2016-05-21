import React from 'react';
import StateIncentives from './StateIncentives';

class ResultPage extends React.Component{
  render() {
    console.log('this.props.stateInfo: ', this.props.stateInfo);
    console.log('this.props.vehicleInfo: ', this.props.vehicleInfo);

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
