'use strict';
import React from 'react';

const StateIncentives = React.createClass({
  render: function(){
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

    //GAS VEHICLES
    if (this.props.vehicleInfo !== undefined &&
      this.props.vehicleInfo.power === "Gas" &&
      this.props.stateInfo[0] !== undefined) {
      var count = 0;
      iconsNode = iconArray.map((icon) => {
        count++;
        return (
          <Icon key={count} source={icon} className="grayIcon"/>
        )
      })
    }

    //HYBRID VEHICLES
    else if (this.props.vehicleInfo !== undefined &&
      this.props.vehicleInfo.power === "Plug-In Hybrid" &&
      this.props.stateInfo[0] !== undefined) {
      var trueArr = [];
      var falseArr = [];
      for (var key in this.props.stateInfo[0].incentivesHybrid) {
        if (this.props.stateInfo[0].incentivesHybrid[key] === "true") {
          trueArr.push(key)
        }
        else {
          falseArr.push(key)
        }
      }
      console.log('trueArr',trueArr);
      var trueNode = trueArr.map((trueKey) => {
        return <Icon key={trueKey} source={iconObj[trueKey]} className="blueIcon" />
      });
      var falseNode = falseArr.map((falseKey) => {
        return <Icon key={falseKey} source={iconObj[falseKey]} className="grayIcon" />
      });
      iconsNode = trueNode.concat(falseNode);
    }

    //ELECTRIC VEHICLES
    else if (this.props.vehicleInfo !== undefined &&
      this.props.vehicleInfo.power === "Electric" &&
      this.props.stateInfo[0] !== undefined) {
      var trueArr = [];
      var falseArr = [];
      for (var key in this.props.stateInfo[0].incentivesElectric) {
        if (this.props.stateInfo[0].incentivesElectric[key] === "true") {
          trueArr.push(key)
        }
        else {
          falseArr.push(key)
        }
      }
      console.log('trueArr',trueArr);
      var trueNode = trueArr.map((trueKey) => {
        return <Icon key={trueKey} source={iconObj[trueKey]} className="greenIcon" />
      });
      var falseNode = falseArr.map((falseKey) => {
        return <Icon key={falseKey} source={iconObj[falseKey]} className="grayIcon" />
      });
      iconsNode = trueNode.concat(falseNode);
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