import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { films } from './getFilmsReducer'
import { user } from './loginReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  films,
  user
})

export default rootReducer
