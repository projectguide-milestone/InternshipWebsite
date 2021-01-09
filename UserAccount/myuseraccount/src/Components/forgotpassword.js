import React, {Component} from 'react';
//import {NavLink} from 'react-router-dom';
//import {Navbar, Nav} from 'react-bootstrap';

export class forgotpassword extends Component{
    render(){
        return(
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

        <button classname="bttn-color" value="submit"> submit</button>

        </form>
        </formGroup>
        </div>
        )
    }
}
export default forgotpassword;