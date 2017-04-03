export const films = (state=[], action) => {
  switch(action.type) {
    case 'GET_FILMS':
    return [...state, ...action.films]
    default:
    return state
  }
}
