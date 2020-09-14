import React, { useState } from 'react';
import { Close } from '@material-ui/icons';

import { deleteNaver } from 'services/api';

import {
  ModalBox, ModalTitle, ButtonsArea, CancelButton, DeleteButton,
} from 'components/Modals/DeleteNaver/styles';
import { Modal } from 'styles/global-elements';

type Props = {
  closeButton: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const DeleteNaver = ({ closeButton, id }: Props) => {
  const [successDeletedModal, setSuccessDeletedModal] = useState(false);

  async function handleDelete() {
    const res = await deleteNaver(id);
    if (res) {
      setSuccessDeletedModal(true);
      return;
    }

    window.location.href = '/navers';
  }

  return (
    <>
      <Modal>
        <ModalBox>
          <span style={{ display: 'block', textAlign: 'end', cursor: 'pointer' }}>
            <Close onClick={() => closeButton(false)} />
          </span>
          <ModalTitle>Excluir Naver</ModalTitle>
          <span>Tem certeza que deseja excluir este Naver?</span>
          <ButtonsArea>
            <CancelButton onClick={() => closeButton(false)}>Cancelar</CancelButton>
            <DeleteButton onClick={handleDelete}>Excluir</DeleteButton>
          </ButtonsArea>
        </ModalBox>
      </Modal>
      {successDeletedModal && (
        <Modal>
          <ModalBox>
            <span style={{ display: 'block', textAlign: 'end', cursor: 'pointer' }}>
              <Close onClick={() => { window.location.href = '/navers'; }} />
            </span>
            <ModalTitle>Naver excluído</ModalTitle>
            <span>Naver excluído com sucesso!</span>
          </ModalBox>
        </Modal>
      )}
    </>
  );
};

export default DeleteNaver;
