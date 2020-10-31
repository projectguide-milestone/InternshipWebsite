import React, {component} from 'react';
import './App.css';
import {loginPage} from './Components/loginPage';
import {Navigation} from './Components/navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <div classname="container">
        <Navigation/>
        <Switch>
          <Route path='/' component={loginPage} exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;