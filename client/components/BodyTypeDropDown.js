'use strict';

const BodyTypeDropDown = React.createClass({
  render() {
    return (

    	<select name="bodyType" id="bodyTypeMenu" onChange={ this.props.handleBodyTypeChange } >
	    			<option value='-'> - </option>
	    			<option value="Hatchback"> Hatchback</option>
						<option value="Compact">   Compact</option>
						<option value="Coupe">     Coupe</option>
						<option value="Sedan">     Sedan</option>
						<option value="SUV">       SUV</option>
    </select>
  	)
  }
});

  export default BodyTypeDropDown;

