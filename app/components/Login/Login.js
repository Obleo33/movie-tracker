import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Login extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
  }

  submitLogin() {
    const { login, loginFailed, logOut } = this.props
    const { email, password } = this.state

    if(!this.validateEmail(email)) {
      return this.setState({error: 'Please Enter A Valid Email'})
    } else {
      fetch('http://localhost:3000/api/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password })
      })
      .then(response => {
        if (!response.ok) {
          this.setState({
            error: 'Invalid Credentials'
          })
          throw Error('error message')
        }
        else {
          response.json().then(user => {
            login(user.data)
            this.props.fetchFavorites(user.data.id)
          })
          this.props.history.push('/')
        }
      })
      .catch(error => {
        loginFailed(error)
        alert('Incorrect login try again ')
      })

      this.setState({
        email: '',
        password: '',
        error: ''
      })
    }
  }



  render () {
    return(
      <div className='user-login'>
        <nav>
          <Link className='favorites-link navlink' to='/'>Main</Link>
        </nav>
        <h3>LOGIN</h3>
        <div className='user-form'>
          <input name='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type='email' placeholder='email'></input>
          <input name='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} type='password' placeholder='password'></input>
          <button className='submit-button button' onClick={this.submitLogin.bind(this)} type='submit'>Submit Button</button>
        </div>
        <Link className='signup-link navlink' to='/new-user'>Sign-Up</Link>
      </div>
    )
  }
}

export default Login
