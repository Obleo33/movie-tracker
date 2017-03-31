import React, { Component } from 'react'
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

  newUser (e){
    e.preventDefault()

    const { login, loginFailed, logOut } = this.props;
    const { email, password, name, id } = this.state;

    fetch('http://localhost:3000/api/users/new', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ name, email, password})
    })

  }

  render () {
    return(
      <div>
        <h3>Login</h3>
        <form className='user-login'>
          <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type='email' placeholder='email'></input>
          <input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} type='password' placeholder='password'></input>
          <button onClick={this.submitLogin.bind(this)} type='submit'>Submit Button</button>
        </form>
        <h3>New to our site?</h3>
          <form className="new-user-form">
            <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} type='name' placeholder='name'></input>
            <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type='email' placeholder='email'></input>
            <input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} type='password' placeholder='password'></input>
            <button onClick={this.newUser.bind(this)} type='submit'>Sign Up</button>
          </form>
      </div>
    )
  }
}

export default Login;
