import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllStateCarInfo } from '../actions/actionCreators';
import InputForm from '../components/InputForm';

const InputContainer = React.createClass({
  render() {
    return (
      <div>
        <InputForm getAllStateCarInfo={this.props.getAllStateCarInfo} stateCarInfo={this.props.stateCarInfo} />
      </div>
    )
  }
});

function mapStateToProps (state) {
  return {
    stateCarInfo: state.allCarsReducer
  }
}

export default connect(mapStateToProps, { getAllStateCarInfo }  )(InputContainer);