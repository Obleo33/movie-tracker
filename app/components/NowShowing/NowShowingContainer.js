import { connect } from 'react-redux'
import * as actions from '../../actions'
import NowShowing from './NowShowing'


const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return {
    fetchFilms: () => {
      dispatch(actions.fetchFilms())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NowShowing)
