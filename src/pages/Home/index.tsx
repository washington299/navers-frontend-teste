import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { GetAllNavers } from 'services/api';
import * as I from 'interfaces';

import Header from 'components/Header';
import Card from 'components/Card';

import {
  Container,
  Top,
  Title,
  AddButton,
  Main,
} from 'pages/Home/styles';

const Home: React.FC = () => {
  const [navers, setNavers] = useState<I.Naver[]>([]);

  useEffect(() => {
    async function getNavers() {
      const res = await GetAllNavers();
      setNavers(res);
    }
    getNavers();
  }, []);

  return (
    <>
      <Header />
      <Container>
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
      </Container>
    </>
  );
};

export default Home;
