import configureMockStore from 'redux-mock-store'
import * as actions from '../../actions/index.js'


const store = configureMockStore()()

const mockData = {
  user: {
    name: 'Franklin',
    id: 1,
    email: 'franklin@gmail.com',
    password: 'password'
  },
  movies: [{
    id: 1,
    movie_id: 263115,
    user_id: 2,
    title: "Logan",
    poster_path: "/45Y1G5FEgttPAwjTYic6czC9xCn.jpg",
    release_date: "2017-02-28",
    vote_average: "7.6",
    overview: "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces."
  }]
}

const mockMovie = [{}]

describe('actions', () => {

  afterEach(() => {
    store.clearActions()
  })

  it('creates login when initiating the login action', () => {
    let expectedAction = { type: 'LOGIN', user: mockData.user}
    store.dispatch(actions.login(mockData.user))
    let createdActions = store.getActions()

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('creates a login error when login fails', () => {
    const mockError = 'error'
    let expectedAction = {type: 'LOGIN_ERROR', error: mockError}
    store.dispatch(actions.loginFailed(mockError))

    let createdAction = store.getActions()

    expect(createdAction.length).toEqual(1)
    expect(createdAction[0]).toEqual(expectedAction)
  })

  it('getFavorites', () => {
    let expectedAction = {type: 'GET_FAVORITES', userFav: mockMovie}

    store.dispatch(actions.getFavorites(mockMovie))
    let createdAction = store.getActions()

    expect(createdAction.length).toEqual(1)
    expect(createdAction[0]).toEqual(expectedAction)
  })

  it('resetFavorites', () => {
    let expectedAction = {type: 'RESET_FAVORITES'}

    store.dispatch(actions.resetFavorites(mockMovie))
    let createdAction = store.getActions()

    expect(createdAction.length).toEqual(1)
    expect(createdAction[0]).toEqual(expectedAction)
  })

  it('signUp', () => {
    let expectedAction = {type: 'SIGN_UP', signup: mockMovie}

    store.dispatch(actions.signup(mockMovie))
    let createdAction = store.getActions()

    expect(createdAction.length).toEqual(1)
    expect(createdAction[0]).toEqual(expectedAction)
  })

  it('logOut', () => {
    let expectedAction = {type: 'LOG_OUT'}

    store.dispatch(actions.logOut(mockMovie))
    let createdAction = store.getActions()

    expect(createdAction.length).toEqual(1)
    expect(createdAction[0]).toEqual(expectedAction)
  })

  it('creates getFilms when initiating fetchFilms action', () => {
    let expectedAction = { type: 'fetchFilms', movies: mockData.movies}
    store.dispatch(fetchFilms(mockData.movies))

    let createdAction = store.getActions()

    expect(createdAction[0].toEqual(expectedAction))
    expect(createdAction.length).toEqual(1)
  })



})
