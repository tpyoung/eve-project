import store from '../store';
import { connect } from 'react-redux';
import ResultPage from './ResultPage';
import StateDropDown from './stateDropDown';
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

  handleUserStateChange(event) {
    this.setState({
      userState: event.target.value
    });
  },
  handleMaxPriceChange(event) {
    this.setState({
      maxPrice: event.target.value
    });
  },
  handleBodyTypeChange(event) {
    console.log('BODY BODY BODY', event.target.value)
    this.setState({
      bodyType: event.target.value
    });
  },

  render(){
    return (
      <div>
      <div className="landingPage">
        <h1>EVE - Electric Vehicle Evaluator</h1>
        <form onSubmit={ this.handleSubmit }>
          <label for="userState">State: </label>
          <StateDropDown value={this.state.userState} handleUserStateChange={this.handleUserStateChange} /> <br/>

          <label for="maxPrice">Max Price: </label>
          <input id="maxPrice" type="text" value={ this.state.maxPrice } onChange={ this.handleMaxPriceChange } /> <br/>
          
          <label for="bodyType">Vehicle Body Type: </label>
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


