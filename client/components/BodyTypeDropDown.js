'use strict';
import React from 'react';
import Redux from 'redux';
import Select from 'react-select';
import styles from './stateDropDown.scss'


var BodyTypeDropDown = React.createClass({
  displayName: 'BodyTypeDropDown',
  propTypes: {
    label: React.PropTypes.string,
    searchable: React.PropTypes.bool,
  },
  getDefaultProps () {
    return {
      label: 'Vehicle Body Type:',
      searchable: true,
    };
  },
  getInitialState () {
    return {
      searchable: this.props.searchable,
      clearable: true
    };
  },
  updateValue (newValue) {
    this.setState({
      selectValue: newValue
    });
    this.props.handleBodyTypeChange(newValue)
  },
  focusStateSelect () {
    this.refs.bodyTypeSelect.focus();
  },
  render () {
    var options = [
      {value: 'All', label: 'All' },
      {value: 'Compact', label: 'Compact' },
      {value: 'Coupe', label: 'Coupe' },
      {value: 'Hatchback', label: 'Hatchback' },
      {value: 'Sedan', label: 'Sedan' },
      {value: 'SUV', label: 'SUV' }
    ];
    return (
      <div className="section">
        <h3 className="section-heading">Type</h3>
        <Select 
        simpleValue 
        options={options} 
        name="selected-type" 
        ref="bodyTypeSelect" 
        placeholder='Vehicle Type'
        onChange={this.updateValue} 
        value={this.state.selectValue} 
        disabled={this.state.disabled} 
        clearable={this.state.clearable} 
        searchable={this.state.searchable} />
      </div>
    );
  }
});

export default BodyTypeDropDown;






