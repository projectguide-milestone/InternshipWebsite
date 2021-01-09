import React, {component} from 'react';
import './App.css';
import {loginPage} from './Components/loginPage';
import {landingPage} from './Components/landingPage';
import {trainerPage} from './Components/trainerPage';
//import {Navigation} from './Components/navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <div classname="container">
       
        <Switch>
          <Route path='/' component={loginPage} exact></Route>
          <Route path='/loginPage' component={loginPage} exact></Route>
          <Route path='/landingPage' component={landingPage} exact></Route>
          <Route path='/trainerPage' component={trainerPage} exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;