const initialState = {
  email: '',
  id: null,
  name: '',
  password: ''
}

const newuser = (state = initialState , action) => {
  switch(action.type){
    case 'SIGN_UP':
      return Object.assign({}, state, action.signup)
    default:
      return state
  }
}

export default newuser;
