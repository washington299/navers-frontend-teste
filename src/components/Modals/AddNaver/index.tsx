import React from 'react';
import { useHistory } from 'react-router-dom';
import { Close } from '@material-ui/icons';

import { ModalBox, ModalTitle } from './styles';
import { Modal } from '../../../styles/global-elements';

type Props = {
  closeButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNaver = ({ closeButton }: Props) => {
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
        <ModalTitle>Naver criado</ModalTitle>
        <span>Naver criado com sucesso!</span>
      </ModalBox>
    </Modal>
  );
};

export default AddNaver;
