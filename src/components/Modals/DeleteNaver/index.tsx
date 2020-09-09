import React from 'react';
import { useHistory } from 'react-router-dom';
import { Close } from '@material-ui/icons';

import {
  ModalBox, ModalTitle, ButtonsArea, CancelButton, DeleteButton,
} from './styles';
import { Modal } from '../../../styles/global-elements';

type Props = {
  closeButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteNaver = ({ closeButton }: Props) => {
  const history = useHistory();

  function handleCloseModal() {
    closeButton(false);
    history.push('/navers');
  }

  return (
    <Modal>
      <ModalBox>
        <span style={{ display: 'block', textAlign: 'end', cursor: 'pointer' }}>
          <Close onClick={handleCloseModal} />
        </span>
        <ModalTitle>Excluir Naver</ModalTitle>
        <span>Tem certeza que deseja excluir este Naver?</span>
        <ButtonsArea>
          <CancelButton>Cancelar</CancelButton>
          <DeleteButton>Excluir</DeleteButton>
        </ButtonsArea>
      </ModalBox>
    </Modal>
  );
};

export default DeleteNaver;
