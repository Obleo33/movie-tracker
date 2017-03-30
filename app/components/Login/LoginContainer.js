import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import userActions from '../actions/userActions';
import Login from '../components/Login';

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
