import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStateInfo } from '../actions/actionCreators';
import InputForm from '../components/InputForm';

const InputContainer = React.createClass({
  render() {
    return (
      <div>
        <InputForm getStateInfo={this.props.getStateInfo} stateInfo={this.props.stateInfo} />
      </div>
    )
  }
});

function mapStateToProps (state) {
  return {
    stateInfo: state.allCarsReducer
  }
}

export default connect(mapStateToProps, { getStateInfo }  )(InputContainer);