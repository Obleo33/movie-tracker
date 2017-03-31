import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

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

  submitLogin(e) {
    e.preventDefault()

    const { login, loginFailed, logOut } = this.props;
    const { email, password } = this.state;

    fetch('http://localhost:3000/api/users', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (!response.ok) {
        this.setState({
          error: 'Invalid Credentials'
        });
        throw Error('error message');
      }
      else {
        response.json().then(user => login(user.data));
        this.props.history.push('/');
      }
    })
    .catch(error => {
      loginFailed(error);
      alert('Incorrect login try again ')
    });

    this.setState({
      email: '',
      password: '',
      error: ''
    })
  }



  render () {
    return(
      <div className='user-login'>
        <h3>Login</h3>
        <form className='user-form'>
          <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type='email' placeholder='email'></input>
          <input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} type='password' placeholder='password'></input>
          <button onClick={this.submitLogin.bind(this)} type='submit'>Submit Button</button>
        </form>
        <Link to='/new-user'>Sign-Up</Link>
      </div>
    )
  }
}

export default Login;
