import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import NowShowingContainer from '../NowShowing/NowShowingContainer'
import './App.css'
import LoginContainer from '../Login/LoginContainer'

class App extends Component {

  render() {
    return (
      <div>
        <h1 className="movie-header">MY FLICKSTER BOOK</h1>
        <NavLink to='/login'>Login</NavLink>
        <Route exact path='/' component={ NowShowingContainer }/>
        <Route exact path='/login' render= { ({ match, location, history}) => <LoginContainer history={history} /> }/>
      </div>
    )
  }
}

export default App;
