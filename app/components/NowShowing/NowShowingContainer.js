import { connect } from 'react-redux'
import * as actions from '../../actions'
import NowShowing from './NowShowing'
import { bindActionCreators } from 'redux';

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NowShowing)
