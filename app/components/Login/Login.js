import React, { Component } from 'react'


default export class Login extends Component {
  constructor(){
    super()
    this.state = {
      userName: '',
      email: '',
    }
  }

  render (){
    return(
      <form>
        <input type='text'></input>
        <input type='text'></input>
        <button type='submit'></button>
      </form>
    )
  }
}
