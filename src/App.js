import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Statistique from './components/Statistique';
import Communication from './components/Communication';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/statistique' component={Statistique} />
        <Route path='/communication' component={Communication} />
      </Switch>
      <Route exact path='/' render={() => {
        return (
          <div>
          je peux me render comme ca que sur / 
          </div>
        );
      }} />
       <Route path='/' render={() => {
        return (
          <div>
          ou comme ca partout .. car pas exact
          </div>
        );
      }} />
    </div>
  );
}

export default App;
