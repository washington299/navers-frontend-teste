import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import api from '../../services/api';
import { INaver } from '../../interfaces';

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
  const [navers, setNavers] = useState<INaver[]>([]);
  const { token } = useCredentialsState();
  const history = useHistory();

  useEffect(() => {
    function getNavers() {
      api.get('/navers?', { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setNavers(res.data))
        .catch(() => history.push('/'));
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
