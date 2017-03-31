import React, { Component } from 'react'

export default class NewUser extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  }

}


// need to create the function that uses regex to verify the email for the user
//then we need to post the new user to the api/users/new address
//need to check if email exists on the server and if it does return an error 
