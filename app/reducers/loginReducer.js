const initialState = {
  email: '',
  id: null,
  name: null
}

const login = (state = initialState , action) => {
  switch(action.type){
    case 'LOGIN':
      return Object.assign({}, state, action.login)
    case 'LOGIN_ERROR':
      return state
    case 'LOG_OUT':
      return Object.assign({}, state, initialState)
    default:
      return state
  }
}

export default login;
