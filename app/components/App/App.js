import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import NowShowingContainer from '../NowShowing/NowShowingContainer'
import './App.css'
import LoginContainer from '../Login/LoginContainer'
import NewUserContainer from '../NewUser/NewUserContainer'
import FavoritesContainer from '../Favorites/FavoritesContainer'

class App extends Component {

  componentWillMount(dispatch) {
    this.props.fetchFilms()
  }

  userInfo() {
    if(!this.props.user.loggedIn){
      return (
        <div className='loggedIn'>Please
          <NavLink className='login-link navlink' to='/login'>LOGIN</NavLink>
          to add Favorites
        </div>
      )
    }
    return (
      <div className='loggedIn'>Logged in as {this.props.user.name}
        <button className='logout-button' onClick={() => this.logOut()}>LOG-OUT</button>
      </div>
    )
  }

  logOut() {
    this.props.logOut()
    this.props.resetFavorites()
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <header className="app-header">
          {this.userInfo()}
          <h1>MY FLICKSTER BOOK</h1>
        </header>
        <Route exact path='/' component={ NowShowingContainer }/>
        <Route path='/login' render= { ({ match, location, history}) => <LoginContainer history={history} /> }/>
        <Route exact path='/new-user' render= { ({ match, location, history}) => <NewUserContainer history={history} /> }/>
        <Route exact path='/favorites' component={ FavoritesContainer } />
      </div>
    )
  }
}

export default App;
