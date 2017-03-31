
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

export const getFilms = films => {
  return {
    type: 'GET_FILMS',
    films
  }
}

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
