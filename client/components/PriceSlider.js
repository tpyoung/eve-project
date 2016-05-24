import ionRangeSlider from 'ion-rangeslider';

var PriceSlider = React.createClass({
	render(){
		$("#range_43").ionRangeSlider({
    type: "single",
    min: 0,
    max: 100,
    from: 50,
    keyboard: true,
    onStart: function (data) {
        console.log("onStart");
    },
    onChange: function (data) {
        console.log("onChange");
    },
    onFinish: function (data) {
        console.log("onFinish");
    },
    onUpdate: function (data) {
        console.log("onUpdate");
    }
});
		return(
		<input type="text" id="example_id" name="example_name" value="" />
		);
	}
});

export default PriceSlider;