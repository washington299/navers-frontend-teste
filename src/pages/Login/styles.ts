import styled from 'styled-components';
import { GlobalLogo, Button, FieldArea } from '../../styles/global-elements';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
`;

export const Card = styled.form`
  width: 400px;
  height: auto;
  padding: 40px 30px;
  border: 1px solid var(--primary-color);
  text-align: center;
`;

export const Logo = styled(GlobalLogo)`
  height: 50px;
  margin-bottom: 40px;

  @media screen and (min-width: 640px) {
    height: 60px;
  }
`;

export const FormFieldArea = styled(FieldArea)`
  width: 100%;
  margin-bottom: 40px;
`;

export const FormButton = styled(Button)`
  width: 100%;
  font-size: var(--normal-font-size);
`;
