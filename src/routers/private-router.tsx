import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';
import { useCredentialsState } from '../contexts/credentials';

type Props = {
  children: React.ReactNode,
  path: string,
}

const PrivateRoute: React.FC<Props> = ({ children, ...rest }: Props) => {
  const { token } = useCredentialsState();

  return (
    <Route
      {...rest}
      render={({ location }) => (isAuthenticated(token) ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      ))}
    />
    // <Route {...rest} render={({ location }) =>
    //   isAuthenticated(token) ? (
    //     children
    //   ) : (
    //     <Redirect
    //       to={{
    //         pathname: '/',
    //         state: { from: location },
    //       }}
    //     />
    //   )
    // />
  );
};
export default PrivateRoute;
