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
            <PrivateRouter private path="/add">
              <AddNaver />
            </PrivateRouter>
            <PrivateRouter private path="/navers">
              <Home />
            </PrivateRouter>
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      </NaverProvider>
    </CredentialsProvider>
  );
}

export default App;
