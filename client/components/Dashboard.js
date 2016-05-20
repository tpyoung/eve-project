import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import InputForm from './InputForm';

function mapStateToProps (state) {
  return {
    stateCarInfo: state.allCarsReducer
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(InputForm);

export default Dashboard;