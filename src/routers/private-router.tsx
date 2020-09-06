import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Log } from '../services/auth';

type Props = {
  children: React.ReactNode,
  path: string,
  private: boolean,
}

const PrivateRoute: React.FC<Props> = ({ children, ...rest }: Props) => {
  let logged = false;

  useEffect(() => {
    async function verifyAuthentication() {
      const res = await Log.isLogged();
      logged = res;
    }
    verifyAuthentication();
  }, []);

  const authenticated = !(rest.private && !logged);

  return (
    <Route
      {...rest}
      render={() => (authenticated ? <Redirect to="/" /> : children)}
    />
  );
};

export default PrivateRoute;
