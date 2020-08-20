import styled from 'styled-components';
import { Logo, Button } from '../../styles/global-elements';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
`;

export const Card = styled.form`
  width: 400px;
  height: 350px;
  padding: 40px 30px;
  border: 1px solid var(--primary-color);
  text-align: center;
`;

export const FormLogo = styled(Logo)`
  height: 50px;
  margin-bottom: 40px;

  @media screen and (min-width: 640px) {
    height: 60px;
  }
`;

export const FormButton = styled(Button)`
  width: 100%;
  color: var(--secondary-color);
  background-color: var(--primary-color);
`;
