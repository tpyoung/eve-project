import ReactSliderNativeBootstrap from 'react-bootstrap-native-slider';
const PriceSliderCSS = require("./PriceSlider.scss");

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
			if (this.state.newPriceState > 90) {
				dollarAmount = ',000 and Above'
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
				onLoad={this.updateValue}
				onChange={this.updateValue}
				/>
				</div>
			</div>
		);
	}
});

export default PriceSlider;

