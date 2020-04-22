import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ParticlesBackground from './components/ParticlesBackground';
import GlobalStyles from './components/GlobalStyles';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <ParticlesBackground />
        <Switch>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/Dashboard/:username">
            <Dashboard />
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
