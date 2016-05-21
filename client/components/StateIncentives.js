'use strict';
import React from 'react';

const StateIncentives = React.createClass({
  render() {
  if (this.props.stateInfo[0] === undefined && this.props.vehicleInfo[0] === undefined){
    console.log('nothing');
  }
  else {
    console.log(this.props.stateInfo[0].incentivesHybrid[0], this.props)
  }
  var grayImgArr = ['gray1', 'gray2', 'gray3'];
  var colorImgArr = ['link', 'link', 'link'];
    if (true) {
      //GAS
      var imageNode = grayImgArr.map(function(img) {
        console.log(img);
        return (
          <p>{img}</p>
        )
      })
      return (
        <div className="StateIncentives">
          <h1>Gas Vehicle</h1>
          {imageNode}
          {Object.keys(this.props.stateInfo[0].incentivesHybrid[0])}
        </div>
      )
    }
    // else if (true) {
    //   //HYBRID
    //   trueArr = [];
    //   falseArr = [];
    //   for key in this.props.stateInfo.incentivesHybrid {
    //     if (key === false) {
    //       falseArr.push(key);
    //     }
    //   }
    // }
  }
});

export default StateIncentives;


//if power === gas
//if power === hybrid, stateInfo.incentivesHybrid
//if power === electric, stateInfo.incentivesElectric