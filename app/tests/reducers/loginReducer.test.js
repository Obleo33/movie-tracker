import { user } from '../../reducers/loginReducer'
import { combineReducers } from "redux"

const initialState = {
  email: null,
  id: null,
  name: null,
  loggedIn: false
}

describe('loginReducer', () => {

it('should return inital state by default', () => {
  expect(user(undefined, {})).toEqual(initialState)
})

it('should return a user object when the action is login', () => {
  const mockUser = { id: 1, name: 'Bob', email: 'foo@bar.com', loggedIn: true};

  expect(user(initialState, {
    type: 'LOGIN',
    user: mockUser
  })).toEqual(mockUser);
})


})
