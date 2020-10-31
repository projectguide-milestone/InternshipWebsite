import React, {component} from 'react';
import './App.css';
import {loginPage} from './components/loginPage';
import {Navigation} from './components/navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <div classname="container">
        <Navigation/>
        <Switch>
          <Route path='/' component={loginPage} exact></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  )
}

export default App;