'use strict';
import React from 'react';

const StateIncentives = React.createClass({
  render: function(){
    console.log('this.props.stateInfo',this.props.stateInfo);
    const iconArray = [
      "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png",
      "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png",
      "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png",
      "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png",
      "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png",
      "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png"
    ];
    const iconObj = {
      cashRebates: "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png",
      charging: "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png",
      hov: "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png",
      install: "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png",
      parking: "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png",
      taxCredits: "http://i.dailymail.co.uk/i/pix//2011/tim/icons/car_icon.png"
    };
    var iconsNode;

    //1: cashRebates 2: charging 3: hov 4: install 5:parking 6: taxCredits

    if (this.props.vehicleInfo !== undefined &&
      this.props.vehicleInfo.power === "Gas" &&
      this.props.stateInfo !== undefined) {
      var count = 0;
      iconsNode = iconArray.map((icon) => {
        count++;
        return (
          <Icon key={count} source={icon} className="grayIcon"/>
        )
      })
    }
    else if (this.props.vehicleInfo !== undefined &&
      this.props.vehicleInfo.power === "Plug-In Hybrid" &&
      this.props.stateInfo !== undefined) {
      var trueArr = [];
      var falseArr = [];
      for (var key in this.props.stateInfo[0].hybridIncentives) {
        if (this.props.stateInfo[0].hybridIncentives[key] === true) {
          console.log("true");
          trueArr.push(this.props.stateInfo[0].hybridIncentives[key])
        }
        else {
          falseArr.push(this.props.stateInfo[0].hybridIncentives[key])
          console.log('false');
        }
      }
      console.log('trueArr',trueArr);
      console.log('falseArr',falseArr);
      var trueNode = trueArr.map((trueKey) => {
        return <Icon key={trueKey} source={iconObj[trueKey]} className="blueIcon" />
      });
      console.log('trueNode',trueNode);
      var falseNode = falseArr.map((falseKey) => {
        return <Icon key={falseKey} source={iconObj[falseKey]} className="grayIcon" />
      });
      iconsNode = trueNode + falseNode;
      console.log("iconsNode", iconsNode);
    }
    return (
      <div>
      <h1>State Incentives</h1>
        {iconsNode}
      </div>
    )
  }
})

const Icon = React.createClass({
  render: function(){
    return (
      <div className="icons">
        <img src={this.props.source} className={this.props.className} />
      </div>
    )
  }
})

export default StateIncentives;
// <img src={"https://cdn1.iconfinder.com/data/icons/automotix/128/bug_car_small_vintage_limousine-128.png"} />

          // {this.props.vehicleInfo.hybridIncentives.cashRebates ? <Image className="blueIcon" /> : <Image className="grayIcon" />}
          // {this.props.vehicleInfo.hybridIncentives.charging ? <Image className="blueIcon" /> : <Image className="grayIcon" />}
          // {this.props.vehicleInfo.hybridIncentives.hov ? <Image className="blueIcon" /> : <Image className="grayIcon" />}
          // {this.props.vehicleInfo.hybridIncentives.install ? <Image className="blueIcon" /> : <Image className="grayIcon" />}
          // {this.props.vehicleInfo.hybridIncentives.parking ? <Image className="blueIcon" /> : <Image className="grayIcon" />}
          // {this.props.vehicleInfo.hybridIncentives.taxCredits ? <Image className="blueIcon" /> : <Image className="grayIcon" />}