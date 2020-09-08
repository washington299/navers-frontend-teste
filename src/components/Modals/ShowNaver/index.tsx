import React, { useState } from 'react';
import { Close, Edit, Delete } from '@material-ui/icons';

import { calculate_age, calculate_admission_date } from '../../../helpers/date-calculate';

import {
  NaverData,
  Picture,
  InformationArea,
  Title,
  SubTitle,
  Text,
} from './styles';
import { Modal, Icons } from '../../../styles/global-elements';

type Props = {
  url: string,
  name: string,
  job_role: string,
  birthdate: string,
  admission_date: string,
  project: string,
  closeButton: React.Dispatch<React.SetStateAction<boolean>>,
}

const ShowNaverModal: React.FC<Props> = ({
  url, name, job_role, birthdate, admission_date, project, closeButton,
}) => {
  const [displayDeleteNaverBox, setDisplayDeleteNaverBox] = useState(false);

  function handleDeleteNaver() {
    setDisplayDeleteNaverBox(true);
  }

  return (
    <Modal>
      <NaverData>
        <Picture>
          <img src={url} alt={`${name} - ${job_role}`} />
        </Picture>
        <InformationArea>
          <span className="close-button">
            <Close onClick={() => closeButton(false)} />
          </span>
          <Title>{name}</Title>
          <Text>{job_role}</Text>
          <SubTitle>Idade</SubTitle>
          <Text>{`${calculate_age(birthdate)} anos.`}</Text>
          <SubTitle>Tempo de empresa</SubTitle>
          <Text>{`Desde: ${calculate_admission_date(admission_date)}.`}</Text>
          <SubTitle>Projetos que ja participou</SubTitle>
          <Text>{project}</Text>
          <Icons>
            <Edit />
            <Delete onClick={handleDeleteNaver} />
          </Icons>
        </InformationArea>
      </NaverData>
    </Modal>
  );
};

export default ShowNaverModal;
