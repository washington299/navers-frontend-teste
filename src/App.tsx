import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { CredentialsProvider } from './contexts/credentials';
import PrivateRouter from './routers/private-router';

import Login from './pages/Login';
import Home from './pages/Home';

import GlobalStyles from './styles/global-styles';

function App() {
  return (
    <CredentialsProvider>
      <GlobalStyles />
      <Router>
        <Switch>
          <PrivateRouter path="/navers">
            <Home />
          </PrivateRouter>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </CredentialsProvider>
  );
}

export default App;
