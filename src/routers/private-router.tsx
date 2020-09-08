import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cookie from 'js-cookie';

type Props = {
  children: React.ReactNode,
  path: string,
}

const PrivateRoute: React.FC<Props> = ({ children, ...rest }: Props) => {
  let authenticated: boolean;
  const token = cookie.get('token');
  if (!token || token === '') {
    authenticated = false;
  } else {
    authenticated = true;
  }

  return (
    <Route
      {...rest}
      render={() => (authenticated ? children : <Redirect to="/sign-in" />)}
    />
  );
};

export default PrivateRoute;
