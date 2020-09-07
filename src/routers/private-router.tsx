import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Log } from '../services/auth';

type Props = {
  children: React.ReactNode,
  path: string,
}

const PrivateRoute: React.FC<Props> = ({ children, ...rest }: Props) => {
  const auth = Log.isLogged().then((res) => res);

  return (
    <Route
      {...rest}
      render={() => (auth ? children : <Redirect to="/sign-in" />)}
    />
  );
};

export default PrivateRoute;
