'use strict';
import React from 'react';
import APILandingPageSCSS from './APILandingPage.scss';

const APILandingPage = React.createClass({
  render(){
    return (

      <div id="apiBody">
        <h1>EVE Electric Vehicle Evaluator API</h1>
        <div className="allTheThings">
          <h2>EVE API accepts the following requests:</h2>
          <div className="allStates">
            <h2>For All States</h2>
            <ol>
              <li>Browser/Postman (JSON): http://eve.devleague.com/api/states</li>
              <li>Command Line: curl http://eve.devleague.com/api/states</li>
            </ol>
          </div>
          <div className="indvStates">
            <h2>For A Specific State</h2>
            <div className="example">Example: http://eve.devleague.com/api/states/Hawaii</div>
            <ol>
              <li>Browser (JSON): http://eve.devleague.com/api/states/State
                <div>State names must be spelled out with a capital first letter</div></li>
              <li>Command Line: curl http://eve.devleague.com/api/states/State</li>
            </ol>
            <div>All state information is state specific and includes the following:
              Incentives Electric: An array of state specific incentives for electric vehicles including tax credits, cash rebates, free or discounted parking, HOV privileges, discounts on home electric station installation, discounts on home electricity rates for electric vehicle owners.
              Incentives Hybrid: An array of state specific incentives for hybrid vehicles including tax credits, cash rebates, free or discounted parking, HOV privileges, discounts on home electric station installation, discounts on home electricity rates for hybrid vehicle owners.
              Gas Cost: An average unleaded gasoline price for March 2016.
              Electric Cost: An average electricity price for 2015.
              Fees: Maximum possible state sales tax applied at the time of vehicle purchase.
            </div>
          </div>
          <div className="allVehicles">
            <h2>For All Vehicles</h2>
            <ol>
              <li>Browser (JSON): http://eve.devleague.com/api/vehicles</li>
              <li>Command Line: curl http://eve.devleague.com/api/vehicles</li>
            </ol>
          </div>
          <div className="indvVehicle">
            <h2>For Specific Vehicles by Price and Body Style</h2>
            <div className="example">Example: http://eve.devleague.com/api/vehicles/35000/Sedan</div>
            <ol>
              <li>Browser (JSON): http://eve.devleague.com/api/vehicles/price/bodystyle</li>
                <div>Price has no commas or punctuation<br/>
                  Price ranges from 12995 to 845000 or All (for any price)<br/>
                  Body style must be spelled out with a capital first letter<br/>
                  Body styles include: Sedan, Coupe, Compact, Hatchback, SUV or All (for all types)<br/>
                </div>
              <li>Command Line: curl http://eve.devleague.com/api/vehicles/price/bodystyle</li>
            </ol>
            <div>All vehicle information is vehicle specific and includes the following:
              Country: Manufacturer country of origin.
              Manufacturer: Manufacturer.
              Model: Model.
              Body: Vehicle body style.
              Power: Vehicle fuel type (electricity, gasoline, or a combination of both).
              MSRP: Vehicle Price.
              MPG / MPGE: Gas miles per gallon or electricity miles per gallon equivalent.
              Range: Distance in miles a vehicle can travel on one tank of gas or full battery charge.
              Energy Per 100 Miles: How many gallons of gasoline or gallon equivalents of electricity to travel 100 miles.
              Annual Fuel Cost: EPA's estimated annual fuel cost.
              Fuel Economy and Greenhouse Gas Rating: EPA's score (out of 10) for gas mileage efficiency and pollution rates.
              Gas Comparable Manufacturer & Gas Comparable Model: A similar gas powered vehicle to compare to.
              Hybrid Comparable Manufacturer & Hybrid Comparable Model: A similar hybrid vehicle to compare to.
              Photo Link: A link to an image of the vehicle.
            </div>
          </div>
        </div>
        <div className="infoDetails">
          *The vehicle and state information comes from various sources listed on our homepage. Some values may have changed.
        </div>
      </div>
    )
  }
});

export default APILandingPage;
