import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Contato from '../Contato';
import Sobre from '../Sobre';

import './style.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={(props) => (
          <Home {...props} />
        )} />
        <Route path="/sobre" render={(props) => (
          <Sobre {...props} />
        )} />
        <Route path="/contato" render={(props) => (
          <Contato {...props} />
        )} />
      </Switch>
    </>
  )
}

export default App
