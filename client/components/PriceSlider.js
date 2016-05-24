import ReactSliderNativeBootstrap from 'react-bootstrap-native-slider';
const PriceSliderCSS = require("./PriceSlider.scss");

var PriceSlider = React.createClass({
	getInitialState() {
    return {
        newPriceState: '60'
      }
    },

	updateValue (newPrice) {
		this.setState({
			newPriceState: newPrice.target.value
		}),	
		this.props.handleMaxPriceChange(newPrice.target.value)
	},
	render(){
			let dollarAmount = ',000'
			if (this.state.newPriceState > 90) {
				dollarAmount = ',000 and Above'
			}
		return(
			<div>
				<h3 className="section-heading">Max Price:</h3>
				<input id="pSlider" 
				type="range" 
				min="20" 
				max="100"  
				step="10"
				onChange={this.updateValue}
				/>
				<output value={'$' + this.state.newPriceState + dollarAmount} for='pSlider'></output>

		</div>
		);
	}
});

export default PriceSlider;

