import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

const App = React.createClass({
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
});

function mapStateToProps (state) {
  return {
    stateCarInfo: state.allCarsReducer
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);