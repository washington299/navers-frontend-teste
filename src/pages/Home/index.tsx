import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GetAllNavers } from '../../services/api';
import * as I from '../../interfaces';

import { useCredentialsState } from '../../contexts/credentials';

import Header from '../../components/Header';
import Card from '../../components/Card';

import {
  HomeStyles,
  Top,
  Title,
  AddButton,
  Main,
} from './styles';

const Home: React.FC = () => {
  const [navers, setNavers] = useState<I.Naver[]>([]);
  const { token } = useCredentialsState();
  const history = useHistory();

  useEffect(() => {
    async function getNavers() {
      const res = await GetAllNavers(token);
      if (!res) {
        history.push('/');
        return;
      }
      setNavers(res);
    }
    getNavers();
  });

  return (
    <>
      <Header />
      <HomeStyles>
        <Top>
          <Title>Navers</Title>
          <Link to="/add">
            <AddButton>Adicionar Naver</AddButton>
          </Link>
        </Top>
        <Main>
          {navers.map((naver) => (
            <Card key={naver.id} naver={naver} />
          ))}
        </Main>
      </HomeStyles>
    </>
  );
};

export default Home;
