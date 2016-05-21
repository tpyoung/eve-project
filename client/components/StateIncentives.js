'use strict';
import React from 'react';

const StateIncentives = React.createClass({
  render() {
  console.log(this.props);
  var grayImgArr = ['gray1', 'gray2', 'gray3'];
  var colorImgArr = ['link', 'link', 'link'];
    if (true) {
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
        </div>
      )
    }
    // else if (true) {

    // }

  }
});

export default StateIncentives;


//if power === gas
//if power === hybrid, stateInfo.incentivesHybrid
//if power === electric, stateInfo.incentivesElectric