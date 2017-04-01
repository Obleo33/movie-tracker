import { connect } from 'react-redux';

import * as actions from '../../actions';
import Favorties from './Favorties';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFavorites: () => {
      dispatch(actions.fetchFavorites())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorties);
