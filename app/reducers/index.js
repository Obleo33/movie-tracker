import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { films } from './getFilmsReducer'
import { login } from './loginReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  films,
  login
})

export default rootReducer
