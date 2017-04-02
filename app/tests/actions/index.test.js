import configureMockStore from 'redux-mock-store'
import * as actions from '../../actions/index.js'


const store = configureMockStore()()

const mockUser = {
    name: 'Franklin',
    id: 1,
    email: 'franklin@gmail.com',
    password: 'password'
}

const mockMovie = [{}]

describe('actions', () => {

  afterEach(() => {
    store.clearActions();
  })

it('creates login when initiating the login action', () => {
  let expectedAction = { type: 'LOGIN', user: mockUser}
  store.dispatch(actions.login(mockUser))
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
  let expectedAction = {type: 'GET_FAVORITES', userFav: mockMovie};

  store.dispatch(actions.getFavorites(mockMovie));
  let createdAction = store.getActions();

  expect(createdAction.length).toEqual(1);
  expect(createdAction[0]).toEqual(expectedAction);
});

it('resetFavorites', () => {
  let expectedAction = {type: 'RESET_FAVORITES'};

  store.dispatch(actions.resetFavorites(mockMovie));
  let createdAction = store.getActions();

  expect(createdAction.length).toEqual(1);
  expect(createdAction[0]).toEqual(expectedAction);
});

it('signUp', () => {
  let expectedAction = {type: 'SIGN_UP', signup: mockMovie};

  store.dispatch(actions.signup(mockMovie));
  let createdAction = store.getActions();

  expect(createdAction.length).toEqual(1);
  expect(createdAction[0]).toEqual(expectedAction);
});

it('logOut', () => {
  let expectedAction = {type: 'LOG_OUT'};

  store.dispatch(actions.logOut(mockMovie));
  let createdAction = store.getActions();

  expect(createdAction.length).toEqual(1);
  expect(createdAction[0]).toEqual(expectedAction);
});



})
