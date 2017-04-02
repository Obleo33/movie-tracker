import loginReducer from '../../reducers/loginReducer'

const initialState = {
  email: null,
  id: null,
  name: null,
  loggedIn: false
}

describe('loginReducer', () => {

it('should return inital state by default', () => {
  expect(loginReducer(undefined, {})).toEqual(initialState)
})

it('should return a user object when the action is login', () => {
  const user = { id: 1, name: 'Bob', email: 'foo@bar.com', loggedIn: true};

  expect(loginReducer(undefined, {
    type: 'LOGIN',
    user
  })).toEqual(user);
})


})
