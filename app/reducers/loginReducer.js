export const login = (state = {}, action) => {
  switch(action.type){
    case 'LOGIN':
      return state
    case 'LOGIN_ERROR':
      return state
    default:
      return state
  }
}
