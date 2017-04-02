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
        <div className='loggedIn'>Please login to add Favorites</div>
      )
    }
    return (
      <div className='loggedIn'>Logged in as {this.props.user.name}</div>
    )
  }

  logOut() {
    this.props.logOut()
    this.props.resetFavorites()
    this.props.history.push('/')
  }

  loggedIn() {
    if(this.props.user.loggedIn) {
      return (
        <nav>
          <button className='logout-button' onClick={() => this.logOut()}>Logout</button>
          <NavLink className='favorites-link navlink' to='/favorites'>Favorites</NavLink>
        </nav>
      )
    }
    return <NavLink className='login-link navlink' to='/login'>Login</NavLink>
  }

  render() {
    return (
      <div>

        <header>
          <h1 className="movie-header">MY FLICKSTER BOOK</h1>
          {this.userInfo()}
          {this.loggedIn()}
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
