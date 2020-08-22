import React from 'react';
import { useHistory } from 'react-router-dom';

import { useCredentialsDispatch } from '../../contexts/credentials';

import { HeaderStyle, Logo, SignOut } from './styles';

const Header: React.FC = () => {
  const history = useHistory();
  const dispatch = useCredentialsDispatch();

  function handleClick() {
    dispatch({
      type: 'REMOVE_USER_CREDENTIALS',
      payload: { id: '', email: '', token: '' },
    });

    history.push('/');
  }

  return (
    <HeaderStyle>
      <Logo />
      <SignOut onClick={handleClick}>Sair</SignOut>
    </HeaderStyle>
  );
};

export default Header;
