import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStateInfo } from '../actions/actionCreators';
import { getCarInfo } from '../actions/actionCreators';
import InputForm from '../components/InputForm';

const InputContainer = React.createClass({
  render() {
    return (
      <div>
        <InputForm getStateInfo={this.props.getStateInfo} stateInfo={this.props.stateInfo} vehicleInfo={this.props.vehicleInfo} getCarInfo={this.props.getCarInfo} />
      </div>
    )
  }
});

function mapStateToProps (state) {
  return {
    stateInfo: state.allCarsReducer,
    vehicleInfo: state.vehicleReducer
  }
}

export default connect(mapStateToProps, { getStateInfo, getCarInfo })(InputContainer);