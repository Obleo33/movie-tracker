const defaultState = []

export const favorites = (state=defaultState, action) => {
  switch(action.type) {
    case 'GET_FAVORITES':
    return [...action.userFav]
    case 'RESET_FAVORITES':
    return defaultState
    default:
    return state
  }
}
