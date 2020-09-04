import React, { useState } from 'react';
import { OverridableCardHeader } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { calculate_age, calculate_admission_date } from '../../../helpers/date-calculate';

import {
  NaverData,
  Picture,
  InformationArea,
  Title,
  SubTitle,
  Text,
} from './styles';
import { Modal } from '../../../styles/global-elements';

type Props = {
  url: string,
  name: string,
  job_role: string,
  birthdate: string,
  admission_date: string,
  project: string,
  closeButton: () => void,
}

const ShowNaverModal: React.FC<Props> = ({
  url, name, job_role, birthdate, admission_date, project, closeButton,
}) => (
  <Modal>
    <NaverData>
      <Picture>
        <img src={url} alt={`${name} - ${job_role}`} />
      </Picture>
      <InformationArea>
        <span className="close-button">
          <Close onClick={() => closeButton()} />
        </span>
        <Title>{name}</Title>
        <Text>{job_role}</Text>
        <SubTitle>Idade</SubTitle>
        <Text>{`${calculate_age(birthdate)} anos.`}</Text>
        <SubTitle>Tempo de empresa</SubTitle>
        <Text>{`Desde: ${calculate_admission_date(admission_date)}.`}</Text>
        <SubTitle>Projetos que ja participou</SubTitle>
        <Text>{project}</Text>
      </InformationArea>
    </NaverData>
  </Modal>
);

export default ShowNaverModal;
