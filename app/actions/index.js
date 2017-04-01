
export const fetchFilms = () => {
  return dispatch => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9b896459c611dec3ec7899adad9da8ec')
    .then((response) => {
      return response.json()
    })
    .then((films) => {
      dispatch(getFilms(films.results))
    })
  }
}

// export const fetchFavorites = (favorites) => {
//   favorites.map(()=>{
//     return dispatch => {
//
//   })
//
//   }
// }

//Films reducer
export const getFilms = films => {
  return {
    type: 'GET_FILMS',
    films
  }
}


//Login_Signup reducers
export const login = user => {
  return {
    type: 'LOGIN',
    user
  }
}

export const loginFailed = error => {
  return {
    type: 'LOGIN_ERROR',
    error
  }
}

export const logOut = () => {
  return {
    type: 'LOG_OUT'
  }
}

export const signup = signup => {
  return {
    type: 'SIGN_UP',
    signup
  }
}

//Favorite reducers

export const addFavorite= addFavorite => {
  return {
    type: 'ADD_FAVORITE',
    signup
  }
}

export const removeFavorite = removeFavorite => {
  return {
    type: 'REMOVE_FAVORITE',
    signup
  }
}

export const getFavorites = getFavorites => {
  return {
    type: 'GET_FAVORITES',
    signup
  }
}
