import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRouter from 'routers/private-router';

import Login from 'pages/Login';
import Home from 'pages/Home';
import AddNaver from 'pages/AddNaver';
import EditNaver from 'pages/EditNaver';

import GlobalStyles from 'styles/global-styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/sign-in" component={Login} />
          <PrivateRouter path="/add">
            <AddNaver />
          </PrivateRouter>
          <PrivateRouter path="/edit/:id">
            <EditNaver />
          </PrivateRouter>
          <PrivateRouter path="/">
            <Home />
          </PrivateRouter>
        </Switch>
      </Router>
    </>
  );
}

export default App;
