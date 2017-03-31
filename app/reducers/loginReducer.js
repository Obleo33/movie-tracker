const initialState = {
  email: '',
  id: null,
  name: null
}

export const login = (user = initialState , action) => {
  switch(action.type){
    case 'LOGIN':
      return Object.assign({}, user, action.login)
    case 'LOGIN_ERROR':
      return user
    case 'LOG_OUT':
      return Object.assign({}, user, initialState)
    default:
      return user
  }
}
