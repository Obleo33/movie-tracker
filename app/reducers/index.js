import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { films } from './getFilmsReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  films
})

export default rootReducer
