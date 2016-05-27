'use strict';
import React from 'react';

const APILandingPage = React.createClass({
  render(){
    return (

      <div id="apiBody">
        <h3>EVE Electric Vehicle Evaluator API request takes the following calls:</h3>
        <div className="allStates">
          <h4>All States</h4>
          <ol>
            <li>Browser/Postman (JSON): http://eve.devleague.com/api/states</li>
            <li>Command Line: Curl http://eve.devleague.com/api/states</li>
          </ol>
        </div>
        <div className="indvStates">
          <h4>Specific State</h4>
          <h4>Example: http://eve.devleague.com/api/states/Hawaii</h4>
          <ol>
            <li>Browser (JSON): http://eve.devleague.com/api/states/State
              <p>State names must be spelled out with a capital first letter</p></li>
            <li>Command Line: Curl http://eve.devleague.com/api/states/State</li>
          </ol>
          <p>All state information is state specific and includes the following:<br/>
            Incentives Electric: An array of state specific incentives for electric vehicles including tax credits, cash rebates, free or discounted parking, HOV privileges, discounts on home electric station installation, discounts on home electricity rates for electric vehicle owners.<br/>
            Incentives Hybrid: An array of state specific incentives for hybrid vehicles including tax credits, cash rebates, free or discounted parking, HOV privileges, discounts on home electric station installation, discounts on home electricity rates for hybrid vehicle owners.<br/>
            Gas Cost: An average unleaded gasoline price for March 2016.<br/>
            Electric Cost: An average electricity price for 2015.<br/>
            Fees: Maximum possible state sales tax applied at the time of vehicle purchase.
          </p>
        </div>
        <div className="allVehicles">
          <h4>All Vehicles</h4>
          <ol>
            <li>Browser (JSON): http://eve.devleague.com/api/vehicles</li>
            <li>Command Line: Curl http://eve.devleague.com/api/vehicles</li>
          </ol>
        </div>
        <div className="indvVehicle">
          <h4>Vehicles by Price and Body Style</h4>
          <h4>Example: http://eve.devleague.com/api/vehicles/35000/Sedan</h4>
          <ol>
            <li>Browser (JSON): http://eve.devleague.com/api/vehicles/price/bodystyle</li>
              <p>Price has no commas or punctuation<br/>
                Price ranges from 12995 to 845000 or All (for any price)<br/>
                Body style must be spelled out with a capital first letter<br/>
                Body styles include: Sedan, Coupe, Compact, Hatchback, SUV or All (for all types)<br/>
              </p>
            <li>Command Line: Curl http://eve.devleague.com/api/vehicles/price/bodystyle</li>
          </ol>
          <p>All vehicle information is vehicle specific and includes the following:<br/>
            Country: Manufacturer country of origin.<br/>
            Manufacturer: Manufacturer.<br/>
            Model: Model.<br/>
            Body: Vehicle body style.<br/>
            Power: Vehicle fuel type (electricity, gasoline, or a combination of both).<br/>
            MSRP: Vehicle Price.<br/>
            MPG / MPGE: Gas miles per gallon or electricity miles per gallon equivalent.<br/>
            Range: Distance in miles a vehicle can travel on one tank of gas or full battery charge.<br/>
            Energy Per 100 Miles: How many gallons of gasoline or gallon equivalents of electricity to travel 100 miles.<br/>
            Annual Fuel Cost: EPA's estimated annual fuel cost.<br/>
            Fuel Economy and Greenhouse Gas Rating: EPA's score (out of 10) for gas mileage efficiency and pollution rates.<br/>
            Gas Comparable Manufacturer & Gas Comparable Model: A similar gas powered vehicle to compare to.<br/>
            Hybrid Comparable Manufacturer & Hybrid Comparable Model: A similar hybrid vehicle to compare to.<br/>
            Photo Link: A link to an image of the vehicle.<br/>
          </p>
        </div>
        <div className="infoDetails">
          The vehicle and state information comes from various sources listed on our homepage. Some values may have changed.
        </div>
      </div>
    )
  }
});

export default APILandingPage;
