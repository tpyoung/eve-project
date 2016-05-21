import React from 'react';

class ResultPage extends React.Component{
  render() {
    console.log('this.props.stateInfo: ', this.props.stateInfo);
    return (
      <div className='ResultPage'>
        {this.props.stateInfo.map((data) => {
          return (
            <p key={data._id}>{data.electricCost}</p>
          )
        })}
      </div>
    )
  } 
}
ResultPage.defaultProps = {
  stateInfo: [],
};

export default ResultPage;
