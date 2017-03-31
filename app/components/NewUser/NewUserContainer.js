import { connect } from 'react-redux'
import newUser from '../NewUser/NewUser.js'
import * as actions from '../actions'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(newUser)  
