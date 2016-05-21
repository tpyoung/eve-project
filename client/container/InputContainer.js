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
  console.log('state.allCarsReducer: ', state.allCarsReducer[0].stateData);
  return {
    stateInfo: state.allCarsReducer[0]
  }
}

export default connect(mapStateToProps, { getStateInfo }  )(InputContainer);