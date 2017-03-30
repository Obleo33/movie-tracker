import React, { Component } from 'react';
// import './NowShowing.css'

class NowShowing extends Component {

  componentDidMount() {
    this.props.fetchFilms()
  }

  render() {
    return(
      <div className="film-posters">
        {this.props.films.map(film  => {
          return (
            <div >
              <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default NowShowing;
