import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import AppContainer from './App/AppContainer';
// import MovieIndex from './components/movieIndex';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createHistory();

const middleware = routerMiddleware(history)

const store = createStore(rootReducer, devTools, applyMiddleware(middleware))

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path='/' component={AppContainer}>
      </Route>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))



// import AppContainer from './appContainer';
// import './index.css';

// import * as reducers from './reducers'
