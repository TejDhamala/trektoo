import React, { Component } from 'react';
import './SignUp.css';


class SignUp extends Component {

  constructor(props){
    super(props);
    this.state={
      mail:'',
      pass:'',
      phone:''
    }
this.SignUp=this.SignUp.bind(this);
  };
  SignUp()
{
  this.setState({mail:this.state.Email});
  this.setState({pass:this.state.password});
  this.setState({phone:this.state.phoneno});
  //console.log('this.state',this.state);
const{mail,pass,phone}=this.state;
};
  render() {
    return (
     <div className="form-inline">
      <h2> Sign Up </h2>
      <div className="form-group">
        <input
            className="form-control"
            type="Text"
            placeholder="Enter Email"
            onChange={event=>this.setState({Email: event.target.value})}
        />
        <input
            className="form-control"
            type="password"
            placeholder="Enter Password"
            onChange={event=>this.setState({password:event.target.value})}
        />
        <input
            className="form-control"
            type="Text"
            placeholder="Enter Phone no."
            onChange={event=>this.setState({phoneno: event.target.value})}
        /> 
      <button
        className="btn btn-primary"
        type="button"
        onClick={()=>this.SignUp()
      }
        >
        Sign Up
        

      </button>
      <h2> {this.state.mail}</h2>
      <h2>{this.state.pass}</h2>
      <h2>{this.state.phone}</h2>

      </div>

     </div>
     
    );
  }
}

export default SignUp;