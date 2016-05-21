import React from 'react';

class ResultPage extends React.Component{
  render() {
    console.log('this.props.stateInfo: ', this.props.stateInfo);
    return (
      <div className='ResultPage'>
      </div>
    )
  } 
}
ResultPage.defaultProps = {
	stateInfo: [],
};

export default ResultPage;
