'use strict';
import React from 'react';
import Redux from 'redux';
import Select from 'react-select';
import styles from '../../node_modules/react-select/scss/default.scss';


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
        <h3 className="section-heading">{this.props.label}</h3>
        <Select ref="bodyTypeSelect" autofocus options={options} onChange={this.updateValue} simpleValue clearable={this.state.clearable} name="selected-type" disabled={this.state.disabled} value={this.state.selectValue} searchable={this.state.searchable} />


        
      </div>
    );
  }
});

export default BodyTypeDropDown;






