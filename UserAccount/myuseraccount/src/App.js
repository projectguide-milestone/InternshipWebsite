import React, {component} from 'react';
import './App.css';
import {loginPage} from './Components/loginPage';
import {landingPage} from './Components/landingPage';
import {Navigation} from './Components/navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <div classname="container">
       
        <Switch>
          <Route path='/' component={loginPage} exact></Route>
          <Route path='/landingpage' component={landingPage} exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;