import React from 'react';
import { useHistory } from 'react-router-dom';
import { Close } from '@material-ui/icons';

import { ModalBox, ModalTitle } from 'components/Modals/EditNaver/styles';
import { Modal } from 'styles/global-elements';

type Props = {
  closeButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditNaver = ({ closeButton }: Props) => {
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
        <ModalTitle>Naver editado</ModalTitle>
        <span>Naver editado com sucesso!</span>
      </ModalBox>
    </Modal>
  );
};

export default EditNaver;
