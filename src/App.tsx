import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Info from './pages/Info';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
