export const films = (state=[], action) => {
  switch(action.type) {
    case 'GET_FILMS':
      debugger
      return [...state, ...action.films]
    default:
      return state
  }
}
