import React, { useState } from 'react';
import { Edit, Delete, Close } from '@material-ui/icons';

import { INaver } from '../../interfaces';
import { calculate_age, calculate_admission_date } from '../../helpers/date-calculate';

import {
  Container,
  Name,
  Job,
  Icons,
  InformationArea,
  Picture,
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
            <Picture>
              <img src={naver.url} alt={`${naver.name} - ${naver.job_role}`} />
            </Picture>
            <InformationArea>
              <span className="close-button">
                <Close onClick={() => setDisplayNaverDataBox(false)} />
              </span>
              <Title>{naver.name}</Title>
              <Text>{naver.job_role}</Text>
              <SubTitle>Idade</SubTitle>
              <Text>{`${calculate_age(naver.birthdate)} anos.`}</Text>
              <SubTitle>Tempo de empresa</SubTitle>
              <Text>{`Desde: ${calculate_admission_date(naver.admission_date)}.`}</Text>
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
