//User login
//Module 1 done by Mohammad and Ratan
//A simple login with username and password
//On success navigate to landing page
// on failure give appropriate message
//Plus links to registration and forgot password link
//document
import {Link, BrowserRouter, Switch, Route, } from 'react-router-dom';
import React, {Component} from 'react';
//import landingPage from './landingPage';
import registrationPage from './registrationPage';
import forgotpassword from './forgotpassword';
import './hey.css';


  
export class loginPage extends Component{
  onNavigateHome()
  {
    
    
  }
  render ()
  {
  return (
    
      <div className="App">
      <h1> Mile stone</h1>
      <formGroup>

      <form className="login-form">
      
      <label className="label-sets">
        EMAIL
      </label>
      <input classname= "input-box" type="email"  placeholder="Email" required={true}/>
      <br/>
      <br/>
  
      <label className="label-sets">
        PASSWORD
      </label> 
      <input classname ="input-box" type="password" required={true} placeholder="Password"/>
      <br/>
      <br/>

      <button classname = "bttn-color" onClick={this.onNavigateHome}> Login </button> <br/>

      <h5>
      <Link to="/signup">Sign up</Link>
      
      <h7 className="label-sets1"> | </h7>
      
      <Link to="/forgotpass">Forgot Password </Link>
      </h5>
      <br/>
      <br/>
      <br/>
      <br/>
      
      </form>

      

      <BrowserRouter>
        <Switch>
          
          <Route exact path="/registrationPage" component={registrationPage}></Route>
          <Route exact path="/forgotpassword" component={forgotpassword}></Route>
        </Switch>
        </BrowserRouter>
     </formGroup>
     
     </div>
    
  );
}
}


export default loginPage;
