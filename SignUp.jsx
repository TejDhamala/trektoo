import React, { Component } from 'react';
import './SignUp.css';
import {firebaseApp} from 'firebase';

class SignUp extends Component {

  constructor(props){
    super(props);
    this.state={
      Email:'',
      password:''
    }

  }
  SignUp()
{
  console.log('this.state',this.state);
  const{Email,password}=this.state;
  firebaseApp.auth().emailandpassword(Email,password)
  .catch(error=>{console.log(error,error);

  })
}
  render() {
    return (
     <div className="form-inline">
      <h2> Sign Up </h2>
      <div className="form-group">
        <input
            className="form-control"
            type="Text"
            placeholder="Email"
            onChange={event=>this.setState({Email: event.target.value})}
        />
        <input
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={event=>this.setState({password:event.target.value})}
        /> 
      <button
        className="btn btn-primary"
        type="button"
        onClick={()=>this.SignUp()}
        >
        Sign Up
        

      </button>
      </div>
     </div>
    );
  }
}
export default SignUp;