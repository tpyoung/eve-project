import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import ResultPage from './ResultPage';
const $ = require('jquery');

const InputForm = React.createClass({
  getInitialState() {
    return {
        userState: '',
        maxPrice: '',
        bodyType: ''
    };
  },
  getStateInfo() {
    $.ajax({
      url: `http://localhost:3000/api/states/${this.state.userState}`,
      dataType: 'json',
      cache: false,
      success: function (data) {
        console.log('data: ', data);
      },
      error: function (xhr, status, err) {
        console.error(err);
      }
    })
  },
  handleSubmit(event) {
    event.preventDefault();
    // this.getStateInfo(); 
    const userState = this.state.userState
    const maxPrice = this.state.maxPrice
    const bodyType = this.state.bodyType
    this.props.getAllStateCarInfo(userState, maxPrice, bodyType) 
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
    this.setState({
      bodyType: event.target.value
    });
  },

  render(){
    return (
      <div className="landingPage">
        <h1>EVE - Electric Vehicle Evaluator</h1>
        <form onSubmit={ this.handleSubmit }>
          <label for="userState">State: </label>
          <input id="userState" type="text" value={ this.state.userState } onChange={ this.handleUserStateChange }/><br/>
          <label for="maxPrice">Max Price: </label>
          <input id="maxPrice" type="text" value={ this.state.maxPrice } onChange={ this.handleMaxPriceChange }/><br/>
          <label for="bodyType">Vehicle Body Type: </label>
          <input id="bodyType" type="text" value={ this.state.bodyType } onChange={ this.handleBodyTypeChange }/><br/>
          <button type="submit">Submit</button>
        </form> 
        <ResultPage />
      </div>
    )
  }
});

export default InputForm;