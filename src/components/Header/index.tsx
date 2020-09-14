import React from 'react';

import { Log } from '../../services/auth';

import { Container, Logo, SignOut } from './styles';

const Header: React.FC = () => {
  function handleClick() {
    Log.doLogOut();
  }

  return (
    <Container>
      <Logo />
      <SignOut onClick={handleClick}>Sair</SignOut>
    </Container>
  );
};

export default Header;
