import store from '../store';
import Redux from 'redux';
import { connect } from 'react-redux';
import ResultPage from './ResultPage';
import StateDropDown from './stateDropDown';
import PriceSlider from './PriceSlider';
import BodyTypeDropDown from './BodyTypeDropDown';
const InputFormCSS = require("./inputForm.scss");

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
    console.log(newPrice)
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
    console.log(this.props.stateInfo)
    return (
      <div className='InputContainerDivs'>
        <div className="landingPage">
          <h1>EVE - Electric Vehicle Evaluator</h1>
          <form onSubmit={ this.handleSubmit }>
            <StateDropDown value={this.state.userState}  handleUserStateChange={this.handleUserStateChange} /> <br/>

            <PriceSlider value={this.state.maxPrice} handleMaxPriceChange={this.handleMaxPriceChange} />

            <BodyTypeDropDown value={ this.state.bodyType } handleBodyTypeChange={ this.handleBodyTypeChange } /> <br/>

            <button type="submit">Submit</button>
          </form>
        </div>
          <ResultPage stateInfo={this.props.stateInfo} vehicleInfo={this.props.vehicleInfo}/>
      </div>
    )
  }
});

export default InputForm;


