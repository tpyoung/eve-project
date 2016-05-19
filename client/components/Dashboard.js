import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import InputForm from './InputForm';

function mapStateToProps (state) {
  console.log('state: ', state);
  return {
    carStateInfo: state
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(InputForm);

export default Dashboard;