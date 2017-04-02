import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NewUser extends Component {
  constructor() {
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

  newUser (){
    const { login, loginFailed, logOut } = this.props;
    const { email, password, name, id } = this.state;

    if(!this.validateEmail(email)) {
      return this.setState({error: 'Please Enter A Valid Email'})
    } else {
      fetch('http://localhost:3000/api/users/new', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, email, password})
      })
      .then( response => {
        console.log(response);
        if(!response.ok) {
          this.setState({ error: 'Email already exist'})
        } else {
          fetch('http://localhost:3000/api/users', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
          })
          .then( response => {
            response.json().then(user => {
              login(user.data)
              this.props.fetchFavorites(user.data.id)
            });
            this.props.history.push('/');
          })
        }
      })
    }

    this.setState({
      name: '',
      email: '',
      password: '',
      error: ''
    })
  }

  render () {
    return(
      <div className="newuser">
        <nav>
          <Link className='favorites-link navlink' to='/'>Main</Link>
        </nav>
        <h3>NEW USER SIGN-UP</h3>
        <div className="new-user-form">
          <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} type='text' placeholder='name'></input>
          <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type='email' placeholder='email'></input>
          <p className='errorMessage'>{this.state.error}</p>
          <input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} type='password' placeholder='password'></input>
          <button className='button' onClick={this.newUser.bind(this)} type='submit'>Sign Up</button>
        </div>
      </div>
    )
  }
}

export default NewUser
