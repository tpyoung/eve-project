import React from 'react';

const ResultPage = React.createClass({
  render() {
    console.log('this.props.stateCarInfo: ', this.props.stateCarInfo);
    return (
      <div className='ResultPage'>
        <h1>results!</h1>
      </div>
    )
  } 
})

export default ResultPage;
