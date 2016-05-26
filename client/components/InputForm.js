import store from '../store';
import Redux from 'redux';
import * as $ from 'jquery';
import { connect } from 'react-redux';
import ResultPage from './ResultPage';
import StateDropDown from './stateDropDown';
import PriceSlider from './PriceSlider';
import BodyTypeDropDown from './BodyTypeDropDown';
const InputFormCSS = require("./InputForm.scss");

const InputForm = React.createClass({
  getInitialState() {
    return {
        userState: '',
        maxPrice: '',
        bodyType: ''
    };
  },
  handleSubmit(event) {
    event.preventDefault();
    this.props.getStateInfo(this.state.userState);
    this.props.getCarInfo(this.state.maxPrice, this.state.bodyType);
    if (this.state.userState && this.state.maxPrice && this.state.bodyType !== null) {
      document.getElementById('landingPage').classList.remove('initLand');
      document.getElementById('landingPage').classList.add('clickLand');

      document.getElementById('dataInput').classList.remove('initFormStyles');
      document.getElementById('dataInput').classList.add('clickFormStyles');

      document.getElementById('header').classList.remove('initHeader');
      document.getElementById('header').classList.add('clickHeader');
    }
  },

  handleUserStateChange(newValue) {
    this.setState({
      userState: newValue
    });
  },
  handleMaxPriceChange(newPrice) {
    newPrice = newPrice * 1000
    if (newPrice >= 100000) {
      newPrice = 900000;
    }
    this.setState({
      maxPrice: newPrice
    });
  },
  handleBodyTypeChange(newValue) {
    this.setState({
      bodyType: newValue
    });
  },
  render(){
    return (
      <div className='InputContainerDivs'>

        <div id="landingPage" className='initLand'>
        <div id="header" className='initHeader'>
          <h1 id='siteTitle'>EVE - Electric Vehicle Evaluator</h1>
        </div>
          <br/>
          <form onSubmit={ this.handleSubmit } id='dataInput' className='initFormStyles'>

           <div className='dropDownContainer'>
            <StateDropDown className='dropDowns' value={this.state.userState}  handleUserStateChange={this.handleUserStateChange} /> <br/>
          </div>
          <div className='dropDownContainer'>
            <BodyTypeDropDown value={ this.state.bodyType } handleBodyTypeChange={ this.handleBodyTypeChange } /> <br/>
          </div>

            <PriceSlider value={this.state.maxPrice} handleMaxPriceChange={this.handleMaxPriceChange} />

          <div id="buttonContainer">
            <button type="submit" id='submitButton' >Search</button>
          </div>
          </form>
        </div>
          <ResultPage stateInfo={this.props.stateInfo} vehicleInfo={this.props.vehicleInfo}/>
      </div>
    )
  }
});

export default InputForm;


