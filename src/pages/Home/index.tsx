import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { GetAllNavers } from '../../services/api';
import * as I from '../../interfaces';

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

  useEffect(() => {
    async function getNavers() {
      const res = await GetAllNavers();
      if (!res) {
        window.location.href = '/';
        return;
      }
      setNavers(res);
    }
    getNavers();
  }, []);

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
