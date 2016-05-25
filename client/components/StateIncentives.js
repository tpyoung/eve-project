
// {(this.props.vehicleInfo.power==='Gas') && 
//         {(this.props.vehicleInfo.power==='Plug-In Hybrid') && 
//         {(this.props.vehicleInfo.power==='Electric') && 
'use strict';
import React from 'react';

const StateIncentives = React.createClass({
  render() {
    if (this.props.stateInfo[0] !== undefined && this.props.vehicleInfo[0] !== undefined){
      var vehicle = this.props.vehicleInfo[0];
      var state = this.props.stateInfo[0];
      var grayImgs = {
        cashRebates: 'gray1',
        charging: 'gray2',
        hov: 'gray3',
        install: 'gray4',
        parking: 'gray5',
        taxCredits: 'gray6'
      };
      var colorImgArr = {
        cashRebates: 'color1',
        charging: 'color2',
        hov: 'color3',
        install: 'color4',
        parking: 'color5',
        taxCredits: 'color6'
      };

      //GAS VEHICLES
      if (vehicle.power === "Gas"){
        var gasKeys = Object.keys(grayImgs);
        var images = gasKeys.map(function(key){
          return (
            <div key={key}>{grayImgs[key]}</div>
          )
        });

        return (
          <div className="StateIncentives">
            <h1>Gas Vehicle</h1>
            <div>{images}</div>
          </div>
        )
      }

      //HYBRID AND ELECTRIC VEHICLES
      else {
        var incentivesArr;
        var color = [];
        var gray = [];

        if (vehicle.power === "Plug-In Hubrid") {
          incentivesArr = state.incentivesHybrid
        }
        else {
          incentivesArr = state.incentivesElectric
        }

        for (var key in incentivesArr) {
          if (incentivesArr[key] === "false") {
            gray.push(key);
          }
          else {
            color.push(key)
          }
        };

        var colorImgs = color.map((key) => {
          return (
            <div key={key}>{colorImgArr[key]}</div>
          )
        });
        var grayImgs = gray.map((key) => {
          return (
            <div key={key}>{grayImgs[key]}</div>
          )
        });

        return (
          <div className="StateIncentives">
            <h1>Hybrid Or Electric Vehicle</h1>
            <div>{colorImgs}</div>
            <div>{grayImgs}</div>
          </div>
        )
      }
    }
    else {
      return null;
    }
  }
});

export default StateIncentives;