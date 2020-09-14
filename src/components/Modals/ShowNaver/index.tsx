import React from 'react';
import { Link } from 'react-router-dom';
import { Close, Edit, Delete } from '@material-ui/icons';

import { calculate_age, convert_date_to_brazilian_format } from 'helpers/date-calculate';

import {
  ModalBox,
  Picture,
  InformationArea,
  Title,
  SubTitle,
  Text,
  IconsArea,
} from 'components/Modals/ShowNaver/styles';
import { Modal } from 'styles/global-elements';

type Props = {
  id: string,
  url: string,
  name: string,
  job_role: string,
  birthdate: string,
  admission_date: string,
  project: string,
  closeButton: React.Dispatch<React.SetStateAction<boolean>>,
  deleteButton: React.Dispatch<React.SetStateAction<boolean>>,
}

const ShowNaverModal: React.FC<Props> = ({
  id, url, name, job_role, birthdate, admission_date, project, closeButton, deleteButton,
}) => {
  function handleDeleteNaver() {
    deleteButton(true);
  }

  return (
    <Modal>
      <ModalBox>
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
          <Text>{`Desde: ${convert_date_to_brazilian_format(admission_date)}.`}</Text>
          <SubTitle>Projetos que ja participou</SubTitle>
          <Text>{project}</Text>
          <IconsArea>
            <Link to={`/edit/${id}`} style={{ color: 'var(--primary-color)' }}>
              <Edit />
            </Link>
            <Delete onClick={handleDeleteNaver} />
          </IconsArea>
        </InformationArea>
      </ModalBox>
    </Modal>
  );
};

export default ShowNaverModal;
