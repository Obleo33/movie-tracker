import React, { Component } from 'react'

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

  newUser (e){
    e.preventDefault()

    const { login, loginFailed, logOut } = this.props;
    const { email, password, name, id } = this.state;

    if(!this.validateEmail(email)) {
      throw Error('Invalid Email');
      return this.setState({error: 'Please Enter A Valid Email'})
    } else {
      fetch('http://localhost:3000/api/users/new', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, email, password})
      })
//

  // )
      // .catch(error => {
      //   console.log('poop');
      // })
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
      <div className="newuser-signup">
        <h3>New user signup</h3>
        <form className="new-user-form">
          <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} type='text' placeholder='name'></input>
          <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type='email' placeholder='email'></input>
          <input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} type='password' placeholder='password'></input>
          <button onClick={this.newUser.bind(this)} type='submit'>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default NewUser
