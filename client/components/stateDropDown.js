'use strict';
import React from 'react';
import Redux from 'redux';
import Select from 'react-select';
import styles from '../../node_modules/react-select/scss/default.scss';
import STATES from '../../node_modules/react-select/examples/src/data/states.js';


var StateDropDown = React.createClass({
	displayName: 'StateDropDown',
	propTypes: {
		label: React.PropTypes.string,
		searchable: React.PropTypes.bool,
	},
	getDefaultProps () {
		return {
			label: 'States:',
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
		this.props.handleUserStateChange(newValue)
	},
	focusStateSelect () {
		this.refs.stateSelect.focus();
	},
	render () {
		var options = STATES.US;
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select 
				autofocus 
				simpleValue 
				options={options} 
				ref="stateSelect" 
				name="selected-state" 
				onChange={this.updateValue} 
				value={this.state.selectValue} 
				disabled={this.state.disabled} 
				clearable={this.state.clearable} 
				searchable={this.state.searchable} 
				/>
			</div>
		);
	}
});

export default StateDropDown;




