import React from 'react';

import Header from '../../components/Header';

import {
  HomeStyles,
  Top,
  Title,
  AddButton,
} from './styles';

const Home: React.FC = () => (
  <>
    <Header />
    <HomeStyles>
      <Top>
        <Title>Navers</Title>
        <AddButton defaultValue="Adicionar Naver" />
      </Top>
    </HomeStyles>
  </>
);

export default Home;
