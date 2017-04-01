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

  userInfo() {
    if(!this.props.user.loggedIn){
      return (
        <div className='loggedIn'>Please login to add Favorites</div>
      )
    }
    return (
      <div className='loggedIn'>Logged in as {this.props.user.name}</div>
    )
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="movie-header">MY FLICKSTER BOOK</h1>
          {this.userInfo()}
          <nav>
            <NavLink to='/login'>Login</NavLink>
          </nav>
        </header>
        <Route exact path='/' component={ NowShowingContainer }/>
        <Route path='/login' render= { ({ match, location, history}) => <LoginContainer history={history} /> }/>
        <Route exact path='/new-user' render= { ({ match, location, history}) => <NewUserContainer history={history} /> }/>
      </div>
    )
  }
}

export default App;
