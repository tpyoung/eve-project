import React from 'react';
import Car from './Car';

class ResultPage extends React.Component{
  filterGasCars () {
  }
  render() {
    console.log('this.props.vehicleInfo: ', this.props.vehicleInfo);
    // this.filterGasCars();
    return (
      <div className='ResultPage'>
        <Car />
      </div>
       
    )
  } 
}
ResultPage.defaultProps = {
  stateInfo: [],
};

export default ResultPage;
