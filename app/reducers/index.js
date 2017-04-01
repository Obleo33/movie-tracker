import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { films } from './getFilmsReducer'
import { user } from './loginReducer'
import { favorites } from './favoritesReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  films,
  user,
  favorites
})

export default rootReducer
