import styled from 'styled-components';

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
