import React from 'react';
import { useHistory } from 'react-router-dom';

import { Log } from '../../services/auth';

import { HeaderStyle, Logo, SignOut } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  function handleClick() {
    Log.doLogOut();
    window.location.href = '/';
  }

  return (
    <HeaderStyle>
      <Logo />
      <SignOut onClick={handleClick}>Sair</SignOut>
    </HeaderStyle>
  );
};

export default Header;
