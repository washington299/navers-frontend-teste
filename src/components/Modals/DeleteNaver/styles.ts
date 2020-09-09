import styled from 'styled-components';
import { Button } from '../../../styles/global-elements';

export const ModalBox = styled.div`
  width: 300px;
  background-color: var(--secondary-color);
  padding: 20px;

  @media screen and (min-width: 640px) {
    width: 450px;
  }
`;

export const ModalTitle = styled.div`
  margin: 0 0 20px 0;
  font-size: var(--big-font-size);
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const CancelButton = styled(Button)`
  width: 150px;
  color: var(--primary-color);
  background-color: var(--secondary-color);
  border: 1px solid var(--primary-color);
  margin-left: 20px;
`;

export const DeleteButton = styled(Button)`
  width: 150px;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  margin-left: 20px;
`;
