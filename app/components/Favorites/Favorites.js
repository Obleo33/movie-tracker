import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Favorites.css'

class Favorites extends Component {

componentDidMount(dispatch) {
  if(this.props.user.loggedIn){
    this.props.fetchFavorites(this.props.user.id)
  }
}

displayFav(){
  const favArr = this.props.favorites
  if(favArr.length){
    favArr.map((film) => {
      return (
        <div className='fav-card film-card' key={film.id} ref={film.id}>
          <h3 className="film-title">{film.title}</h3>
          <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}/>
          <article className='film-overview'>{film.overview}</article>
        </div>
      )
    })
  }
}

  render() {
    return(
      <div className="favorite-container">
        <Link to='/'>Main</Link>
        {this.displayFav()}
      </div>
    )
  }
}

export default Favorites;
