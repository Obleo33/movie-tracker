export const favorites = (state=[], action) => {
  switch(action.type) {
    case 'GET_FAVORITES':
      return [...state, ...action.userFav]
    default:
      return state
  }
}
