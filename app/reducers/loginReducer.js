const initialState = {
  email: '',
  id: null,
  name: null
}

export const login = (state = {}, action) => {
  switch(action.type){
    case 'LOGIN':
      return state
    case 'LOGIN_ERROR':
      return state
    case 'LOG_OUT':
      return initialState
    default:
      return state
  }
}
