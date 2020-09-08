import React from 'react';

import { Log } from '../../services/auth';

import { HeaderStyle, Logo, SignOut } from './styles';

const Header: React.FC = () => {
  function handleClick() {
    Log.doLogOut();
  }

  return (
    <HeaderStyle>
      <Logo />
      <SignOut onClick={handleClick}>Sair</SignOut>
    </HeaderStyle>
  );
};

export default Header;
