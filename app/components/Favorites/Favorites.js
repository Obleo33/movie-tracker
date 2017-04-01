import React, { Component } from 'react';
import './Favorties.css'

class Favorties extends Component {

  render() {
    return(
      <div className="film-container">
        {this.props.films.map(film  => {
          return (
            <div className='film-card' key={film.id} ref={film.id}>
              <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Favorties;
