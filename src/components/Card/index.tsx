import React, { useState } from 'react';
import { Edit, Delete, Close } from '@material-ui/icons';

import { INaver } from '../../interfaces';
import ShowNaver from '../Modals/ShowNaver';

import {
  Container,
  Name,
  Job,
  Icons,
  DeleteNaver,
} from './styles';
import { Modal } from '../../styles/global-elements';

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
        <ShowNaver
          url={naver.url}
          name={naver.name}
          job_role={naver.job_role}
          birthdate={naver.birthdate}
          admission_date={naver.admission_date}
          project={naver.project}
          closeButton={() => setDisplayNaverDataBox(false)}
        />
      )}
      {displayDeleteNaverBox && (
        <Modal>
          <DeleteNaver>Deletar Naver</DeleteNaver>
        </Modal>
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
