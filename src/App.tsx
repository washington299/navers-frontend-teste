import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { CredentialsProvider } from './contexts/credentials';
import { NaverProvider } from './contexts/naver';
import PrivateRouter from './routers/private-router';

import Login from './pages/Login';
import Home from './pages/Home';
import AddNaver from './pages/AddNaver';

import GlobalStyles from './styles/global-styles';

function App() {
  return (
    <CredentialsProvider>
      <NaverProvider>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/sign-in" component={Login} />
            <PrivateRouter path="/add">
              <AddNaver />
            </PrivateRouter>
            <PrivateRouter path="/">
              <Home />
            </PrivateRouter>
          </Switch>
        </Router>
      </NaverProvider>
    </CredentialsProvider>
  );
}

export default App;
