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

  submitLogin(e) {
    console.log(e);
    e.preventDefault()
    this.setState({
      email: '',
      password: ''
    })
  }

  render () {
    return(
      <form>
        <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type='email' placeholder='email'></input>
        <input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} type='password' placeholder='password'></input>
        <button onClick={this.submitLogin.bind(this)} type='submit'>Submit Button</button>
      </form>
    )
  }
}

export default Login;
