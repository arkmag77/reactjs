// import React from 'react';
import React, { Component } from 'react';

import axios from 'axios';

import './SignUp.css';


class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valueUser: '',
      valueEmail: '',
      valuePassword: '',
      valuePassConf: '',
      serverResp:''
    }

  }

  // function SignUp () {


  validate = (event) => {

    event.preventDefault();

    console.log(`funkcja validate() -wywołanie`);

    let errorCounter = 0;
    /* if (error.children.length > 0) {
        event.preventDefault();
    } */

    if (this._inputUser.value.trim() === '') {

      this.setState({ valueUser: '⚠ This field is required' })
      errorCounter++;

    } else if (this._inputUser.value.trim().length <= 3) {

      errorCounter++;
      this.setState({ valueUser: '⚠ This user name is to short' })

    } else {

      errorCounter = 0;
      this.setState({ valueUser: '' })

    }

    if (this._inputEmail.value.trim() === '') {

      errorCounter++;
      this.setState({ valueEmail: '⚠ This field is required' })

    } else if (this._inputEmail.value.trim().length <= 5) {

      errorCounter++;
      this.setState({ valueEmail: '⚠ This email adress is to short' })

    } else if (!this._inputEmail.value.includes('@')) {

      errorCounter++;
      this.setState({ valueEmail: '⚠ Email adress must include @' })

    } else {

      errorCounter = 0;
      this.setState({ valueEmail: '' })

    }


    if (this._inputPassword.value.trim() === '') {

      errorCounter++;
      this.setState({ valuePassword: '⚠ This field is required' })

    } else if (this._inputPassword.value.trim().length <= 3) {

      errorCounter++;
      this.setState({ valuePassword: '⚠ This password is to short' })

    } else {

      errorCounter = 0;
      this.setState({ valuePassword: '' })

    }

    if (this._inputPassConf.value.trim() === '') {

      errorCounter++;
      this.setState({ valuePassConf: '⚠ This field is required' })

    } else if (!(this._inputPassConf.value === this._inputPassword.value)) {

      errorCounter++;
      this.setState({ valuePassConf: '⚠ Password is not the same' })

    } else {

      errorCounter = 0;
      this.setState({ valuePassConf: '' })

    }

    console.log(`errorCounter ${errorCounter}`);


    if (errorCounter === 0) {

      console.log(`Warunek IF errorCounter ${errorCounter}`);
      this.writeUser();

    }



  }

  writeUser = () => {

    console.log(`funkcja writeUser () -wywołanie`);

    let newUser = {
      username: this._inputUser.value,
      email: this._inputEmail.value,
      password: this._inputPassword.value,
    }

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    axios.post(
      'http://akademia108.pl/api/social-app/user/signup',
      JSON.stringify(newUser),
      { 'headers': headers })
      .then((req) => {

        console.log("req.data",req.data);

        if (req.data.signedup === true){

          console.log(`User zapisany`);
          this.setState({serverResp: 'Użytkownik zapisany'});

        } else {

          if (req.data.message.username[0] === "The username has already been taken."){

            console.log(`Taki użytkownik już istnieje,spróbuj ponownie`);
            this.setState({serverResp: 'Taki użytkownik już istnieje,spróbuj ponownie'});
  
          } 
          
          /* if (req.data.message.email[0] === "The email has already been taken.") {

          console.log(`Taki e-mail już istnieje spróbuj ponownie`);
          this.setState({serverResp: `Taki e-mail już istnieje spróbuj ponownie`});
          } */

        }     

        console.log(req.data);
        console.log(JSON.stringify(req.data));
      })
      .catch((error) => {
        console.error(error);
      })

  }


  render() {
    return (
      <div className="SignUp">

        <h1>Sign Up form</h1>

        <form onSubmit={this.validate/* , this.writeUser  */} /* onSubmit={this.writeUser  } */ >
          <fieldset>
            <input ref={(element) => { this._inputUser = element }} /* onChange={this.validate} */ name="User" type="text" placeholder="Enter Username" />
            {/* {<div for="UserName" className="UserName">Enter Username</div>} */}
            <span className="UserNameComment"> {this.state.valueUser} </span>
          </fieldset>

          <fieldset>
            <input ref={(element) => { this._inputEmail = element }} /* onChange={this.validate} */ name="Email" type="text" placeholder="Enter e-mail adress" />
            {/* <div for="Email" className="Email">Enter E-mail adress</div> */}
            <span className="EmailComment"> {this.state.valueEmail} </span>
          </fieldset>

          <fieldset>
            <input ref={(element) => { this._inputPassword = element }} /* onChange={this.validate} */ name="Password" type="text" placeholder="Password" />
            {/*  <div for="Password" className="Password">Enter Password</div> */}
            <span className="PasswordComment"> {this.state.valuePassword} </span>
          </fieldset>

          <fieldset>
            <input ref={(element) => { this._inputPassConf = element }} /* onChange={this.validate} */ name="PasswordConfirm" type="text" placeholder="Confirm Password" />
            {/*  <div for="PasswordConfirm" className="PasswordConfirm">Confirm Password</div> */}
            <span className="PassConfComment"> {this.state.valuePassConf} {this.state.serverResp}</span>
          </fieldset>

          <button type="submit" >Sign Up</button>

          <fieldset>
            <span className="ServerRespComment"> {this.state.serverResp} </span>
          </fieldset>

        </form>

      </div>
    );

  }
}
export default SignUp;
