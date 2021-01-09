import React from 'react';
import  {Component} from 'react';
//import axios from 'axios';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './hey.css';

//import {Navbar, Nav} from 'react-bootstrap';

export class signup extends Component{
  constructor(props)
  {
    super(props);
    this.addFormData = this.addFormData.bind(this);
  }
  addFormData(evt) {
    evt.preventDefault();
    const fd= new FormData();
    fd.append('names', this.refs.names.value);
    fd.append('ages', this.refs.ages.value);
    fd.append('dobs', this.refs.dobs.value);
    fd.append('emailid', this.refs.emailid.value);
    fd.append('phones', this.refs.phones.value);
    fd.append('passwords', this.refs.passwords.value);
    fd.append('password1', this.refs.password1.value);
    axios.post('http://localhost/Milestone/signpa.php', fd
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
  render(){
    return(
    <div className="App">
      <h1> Mile stone</h1>
      <formGroup>
      <div class="text-center login-box1" ref={(el)=>this.myFormRef=el}>
        <form>
        <h3>Name</h3>
        <input type="text"  placeholder="Name" required={true} ref="names"/>
        <br/><br/>
        
        <h3>Age</h3>
        <input type="number"  placeholder="Age" required={true} ref="ages"/>
        <br/><br/>
        
        <h3>Date of Birth</h3>  
        <input type="date" placeholder="Date of birth" required={true} ref="dobs"/>
        <br/><br/>

        <h3>EMAIL</h3>  
        <input type="text"  placeholder="Email" required={true} ref="emailid"/>     
        <br/>
        <br/>
        <h3>Phone number</h3>  
        <input type="tel" placeholder="Phone number" required={true} ref="phones"/>
        <br/>
        <br/>
        <h3>Password</h3>
        <input type="password"  placeholder="Password" required={true} ref="passwords"/>
        <br/>
        <br/>
        <h3>Confirm Password</h3>
        <input type="password"  placeholder="Password" required={true} ref="password1"/>
        <br/>
        <br/>
        <br/>

        <button onClick={this.addFormData} type="submit"> Sign up</button>
        <br/>
        </form>
      </div>
      </formGroup>
    </div>
        )
    }
}

export default signup;