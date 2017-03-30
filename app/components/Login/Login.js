import React, { Component } from 'react'
import './Login.css'

 class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInput(e) {
    console.log(e);
  }

  render () {
    return(
      <form>
        <input type='email' placeholder='email'></input>
        <input type='password' placeholder='password'></input>
        <button type='submit'></button>
      </form>
    )
  }
}

export default Login;
