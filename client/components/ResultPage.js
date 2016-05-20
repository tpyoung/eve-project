import React from 'react';

class ResultPage extends React.Component{
  render() {
    console.log('this.props.stateCarInfo: ', this.props.stateCarInfo);
    return (
      <div className='ResultPage'>
       {
       	this.props.stateCarInfo.map((item, index) => {
       		return (
       			<div key={index}>
							<h1> {item.userState} </h1>
							<h1> {item.maxPrice} </h1>
							<h1> {item.bodyType} </h1>
						</div>
       		)
       	})
       }
      </div>
    )
  } 
}
ResultPage.defaultProps = {
	stateCarInfo: [],
};

export default ResultPage;
