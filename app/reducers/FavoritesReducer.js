export const favorites = (state=[], action) => {
  switch(action.type) {
    case 'GET_FAVORITES':
      return [...state, ...action.films]
    default:
      return state
  }
}
