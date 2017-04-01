import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Favorites.css'

class Favorites extends Component {

componentDidMount(dispatch) {
  if(this.props.user.loggedIn){
    this.props.fetchFavorites(this.props.user.id)
  }
}

  render() {
    return(
      <div className="favorite-container">
        <Link to='/'>Main</Link>
      </div>
    )
  }
}

export default Favorites;
