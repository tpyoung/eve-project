'use strict';
import styles from './componentStyles/Disclaimer.scss'

const Disclaimer = React.createClass({
  render(){
    var kbb = <a href='http://www.kbb.com/'>Kelley Blue Book</a>
    var eds = <a href='http://www.edmunds.com/'>Edmunds</a>
    var doe = <a href='http://fueleconomy.gov/'>Fuel Economy.gov</a>
    var epa = <a href='https://www3.epa.gov/'>Environmental Protection Agency</a>
    var aaa = <a href='http://fuelgaugereport.aaa.com/todays-gas-prices/'>AAA</a>
    var eia = <a href='https://www.eia.gov/electricity/monthly/epm_table_grapher.cfm?t=epmt_5_6_a'>US Energy Information Administration</a>
    var usdoe = <a href='http://www.afdc.energy.gov/laws/state'>US Department of Energy</a>
    return (
      <div className="disclaimers">
        <p>Actual results will vary for many reasons including driving conditions and how you drive and maintain your vehicle. The average new vehicle gets 22 MPG and costs $12,600 to fuel over 5 years. Cost estimates are based on 15,000 miles per year at $3.70 per gallon. MPGe is miles per gasoline gallon equivalent. Vehicle emissions are a significant cause of climate change and smog. </p>
        <p>Electricity and gasoline costs vary and may differ from the values shows above.</p>
        <p>Data has been gathered from the following sources:</p>
        <p className="links">{kbb} {eds} {doe} {epa} {aaa} {eia}</p>
      </div>
    )
  }
});

export default Disclaimer;