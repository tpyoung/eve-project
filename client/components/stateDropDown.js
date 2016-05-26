'use strict';
import Redux from 'redux';
import Select from 'react-select';
// import styles from '';
import styles from './stateDropDown.scss'
import STATES from '../resources/states.js';


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
		console.log(newValue)
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
				<h3 className="section-heading">State</h3>
				<Select 
				autofocus 
				simpleValue 
				options={options} 
				placeholder='State'
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




