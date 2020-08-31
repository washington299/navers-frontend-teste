import styled from 'styled-components';
import { Button, FieldArea } from '../../styles/global-elements';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;

  @media screen and (min-width: 640px) {
    width: auto;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: var(--big-font-size);
  }
`;

export const Title = styled.h1`
  margin-left: 10px;
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 100%;
  grid-template-rows: repeat(7);

  @media screen and (min-width: 640px) {
    width: 600px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4);
  }
`;

export const FormFieldArea = styled(FieldArea)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 640px) {
    width: 280px;
  }
`;

export const FormButton = styled(Button)`
  height: 40px;
  font-size: var(--normal-font-size);
  color: var(--secondary-color);
  background-color: var(--primary-color);
  text-align: center;

  @media screen and (min-width: 640px) {
    grid-column: 2/3;
  }
`;

export const ModalBox = styled.div`
  width: 300px;
  background-color: var(--secondary-color);
  padding: 20px;

  @media screen and (min-width: 640px) {
    width: 450px;
  }
`;

export const ModalTitle = styled(Title)`
  margin: 0 0 20px 0;
  font-size: var(--big-font-size);
`;
