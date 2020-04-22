import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ParticlesBackground from './components/ParticlesBackground';
import GlobalStyles from './components/GlobalStyles';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <ParticlesBackground />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
