//User login
//Module 1 done by Mohammad and Ratan
//A simple login with username and password
//On success navigate to landing page
// on failure give appropriate message
//Plus links to registration and forgot password link
//document
//import logo from './logo.svg';
//import './App.css';
import {Link, BrowserRouter, Switch, Route, } from 'react-router-dom';
import React, {Component} from 'react';
//import landing from './landing';
import signup from './signup';
import forgotpass from './forgotpassword';
import './hey.css';
import axios from 'axios';
import Swal from 'sweetalert2';
//import './../App.css';


export class loginPage extends Component{
  constructor(props)
  {
    super(props);
    this.addFormData = this.addFormData.bind(this);
  }
  addFormData(evt) {
    evt.preventDefault();
    const fd= new FormData();
    fd.append('emailid', this.refs.emailid.value);
    fd.append('passwords', this.refs.passwords.value);
    axios.post('http://localhost/Milestone/loginpa.php', fd
      ).then(res=>
      {
      //Success alert
       Swal.fire({
      title: 'Milestone',
      text: res.data.data,
      type: 'success',
       }
       );
      this.myFormRef.reset();
     }
    );
}
  render ()
  {

  return (
     
      <div className="App">
      <h1> Mile stone</h1>
      <formGroup>
      <div class = "login-box">
        <form class="text-center" ref={(el)=>this.myFormRef=el}>
      
        <h3>Email ID</h3>
        <input type="email"  placeholder="Email" required={true} ref="emailid"/>
        <br/>
    
        <h3>Password</h3> 
        <input type="password" required={true} placeholder="Password" ref="passwords"/>
        <br/>
        <br/>
        

        <button onClick={this.addFormData} type="submit"> Login </button> <br/>

        <h4>
        <Link to="/signup">Sign up</Link>
        
        <h7 className="label-sets1"> | </h7>
        
        <Link to="/forgotpass">Forgot Password </Link>
        </h4>
        <br/>
        <br/>
        <br/>
        <br/>
        
        </form>
        </div>
      </formGroup>
      
    <BrowserRouter>
        <Switch>
          
          <Route exact path="/signup" component={signup}></Route>
          <Route exact path="/forgotpass" component={forgotpass}></Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}
}


export default loginPage;