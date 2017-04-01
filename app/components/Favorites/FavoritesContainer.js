import { connect } from 'react-redux';

import * as actions from '../../actions';
import Favorites from './Favorites';

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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
