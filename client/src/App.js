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
import { UsernameProvider } from './utils/UsernameContext';
import { CoinDataProvider } from './utils/CoinDataContext';

function App() {
  return (
    <Router>
      <UsernameProvider>
        <CoinDataProvider>
          <GlobalStyles />
          <ParticlesBackground />
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/dashboard/:username">
              <Dashboard />
            </Route>
            <Redirect from="/" to="/login" />
          </Switch>
        </CoinDataProvider>
      </UsernameProvider>
    </Router>
  );
}

export default App;
