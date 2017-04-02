const initialState = {
  email: null,
  id: null,
  name: null,
  loggedIn: false
}

 const user = (state = initialState, action) => {
  switch(action.type){
    case 'LOGIN':
      return Object.assign({}, state, action.user, { loggedIn: true })
    case 'LOGIN_ERROR':
      return state
    case 'LOG_OUT':
      return Object.assign({}, state, initialState)
    default:
      return state
  }
}

export default user;
