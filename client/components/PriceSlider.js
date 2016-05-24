import ReactSliderNativeBootstrap from 'react-bootstrap-native-slider';
const PriceSliderCSS = require("./PriceSlider.scss");


var PriceSlider = React.createClass({
		
		updateValue (newPrice) {
			console.log('newPrice', newPrice.target.value);
			this.props.handleMaxPriceChange(newPrice)
		},
	render(){
		return(
			<input id="pSlider" 
			type="range"  
			min="20000" 
			max="850000"  
			step="5000"
			onChange={this.updateValue}
			/>
		);
	}
});

export default PriceSlider;

