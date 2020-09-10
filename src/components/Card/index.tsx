import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Delete } from '@material-ui/icons';

import * as I from '../../interfaces';
import ShowNaver from '../Modals/ShowNaver';
import DeleteNaver from '../Modals/DeleteNaver';

import {
  Container,
  Name,
  Job,
} from './styles';
import { Icons } from '../../styles/global-elements';

type Props = {
  naver: I.Naver,
};

const Card: React.FC<Props> = ({ naver }: Props) => {
  const [displayNaverDataBox, setDisplayNaverDataBox] = useState(false);
  const [displayDeleteNaverBox, setDisplayDeleteNaverBox] = useState(false);

  function handleDeleteNaver() {
    setDisplayNaverDataBox(false);
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
          closeButton={setDisplayNaverDataBox}
          deleteButton={setDisplayDeleteNaverBox}
        />
      )}
      {displayDeleteNaverBox && (
        <DeleteNaver closeButton={setDisplayDeleteNaverBox} id={naver.id} />
      )}
      <Container>
        <img
          src={naver.url}
          alt={`${naver.name} - ${naver.job_role}`}
          onClick={() => setDisplayNaverDataBox(true)}
          onKeyPress={() => setDisplayDeleteNaverBox(true)}
        />
        <Name onClick={() => setDisplayNaverDataBox(true)}>{naver.name}</Name>
        <Job>{naver.job_role}</Job>
        <Icons>
          <Link to="/edit" style={{ color: 'var(--primary-color)' }}>
            <Edit />
          </Link>
          <Delete onClick={handleDeleteNaver} />
        </Icons>
      </Container>
    </>
  );
};

export default Card;
