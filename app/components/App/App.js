import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import NowShowingContainer from '../NowShowing/NowShowingContainer'
import './App.css'
import LoginContainer from '../Login/LoginContainer'
import NewUserContainer from '../NewUser/NewUserContainer'

class App extends Component {

  componentDidMount(dispatch) {
    this.props.fetchFilms()
  }

  render() {
    return (
      <div>
        <h1 className="movie-header">MY FLICKSTER BOOK</h1>
        <NavLink className="login-link" to='/login'>Login</NavLink>
        <Route exact path='/' component={ NowShowingContainer }/>
        <Route path='/login' render= { ({ match, location, history}) => <LoginContainer history={history} /> }/>
        <Route exact path='/new-user' render= { ({ match, location, history}) => <NewUserContainer history={history} /> }/>
      </div>
    )
  }
}

export default App;
