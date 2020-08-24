import React, { useState } from 'react';
import { Edit, Delete, Close } from '@material-ui/icons';

import { INaver } from '../../interfaces';

import {
  Container,
  Name,
  Job,
  Icons,
  InformationArea,
  Title,
  SubTitle,
  Text,
  NaverData,
  DeleteNaver,
} from './styles';
import { DarkBackground } from '../../styles/global-elements';

type Props = {
  naver: INaver,
};

const Card: React.FC<Props> = ({ naver }: Props) => {
  const [displayNaverDataBox, setDisplayNaverDataBox] = useState(false);
  const [displayDeleteNaverBox, setDisplayDeleteNaverBox] = useState(false);

  function handleDeleteNaver() {
    setDisplayDeleteNaverBox(true);
  }

  return (
    <>
      {displayNaverDataBox && (
        <DarkBackground>
          <NaverData>
            <img src={naver.url} alt={`${naver.name} - ${naver.job_role}`} />
            <InformationArea>
              <span className="close-button">
                <Close onClick={() => setDisplayNaverDataBox(false)} />
              </span>
              <Title>{naver.name}</Title>
              <Text>{naver.job_role}</Text>
              <SubTitle>Idade</SubTitle>
              <Text>{naver.birthdate}</Text>
              <SubTitle>Tempo de empresa</SubTitle>
              <Text>{naver.admission_date}</Text>
              <SubTitle>Projetos que ja participou</SubTitle>
              <Text>{naver.project}</Text>
            </InformationArea>
          </NaverData>
        </DarkBackground>
      )}
      {displayDeleteNaverBox && (
        <DarkBackground>
          <DeleteNaver>Deletar Naver</DeleteNaver>
        </DarkBackground>
      )}
      <Container onClick={() => setDisplayNaverDataBox(true)}>
        <img src={naver.url} alt={`${naver.name} - ${naver.job_role}`} />
        <Name>{naver.name}</Name>
        <Job>{naver.job_role}</Job>
        <Icons>
          <Edit />
          <Delete onClick={handleDeleteNaver} />
        </Icons>
      </Container>
    </>
  );
};

export default Card;
