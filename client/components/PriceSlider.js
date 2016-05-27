'use strict';
import ReactSliderNativeBootstrap from 'react-bootstrap-native-slider';
import styles from './componentStyles/PriceSlider.scss';

var PriceSlider = React.createClass({
	getInitialState() {
    return {
        newPriceState: 60
      }
    },
	componentDidMount() {
		this.state.newPriceState = 60
		this.props.handleMaxPriceChange(this.state.newPriceState)
	},
	updateValue (newPrice) {
		this.setState({
			newPriceState: newPrice.target.value
		}),
		this.props.handleMaxPriceChange(newPrice.target.value)
	},
	render(){
			let dollarAmount = ',000'
			if (this.state.newPriceState > 95) {
				dollarAmount = ',000 and Above'
			}
			let dollarAmount2 = ',000'
			if (this.state.newPriceState > 95) {
				dollarAmount2 = ',000 +'
			}
		return(
			<div>
				<h3 className="section-heading">Budget:
				<br />
				<output value={'$' + this.state.newPriceState + dollarAmount} for='pSlider'></output>
			</h3>
			<div id='slideContainer'>
				<input id="pSlider"
				type="range"
				min="30"
				max="100"
				step="5"
				onChange={this.updateValue}
				/>
				</div>
				<div id='priceTab' className="initSliderBox">
					<div id="triangle"></div>
					<div id='box'>
						<output value={'$' + this.state.newPriceState + dollarAmount2} for='pSlider'></output>
					</div>
				</div>
			</div>
		);
	}
});

export default PriceSlider;

